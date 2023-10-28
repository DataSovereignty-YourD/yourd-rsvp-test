import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { BiSolidCopy, BiSearch } from "react-icons/bi";
import logo from "../assets/img/YourD_Logo.jpg";

export default function ListRsvp() {
  const [projects, setProjects] = useState<any>([]); //프로젝트에 대한 간략한 정보만 가져오도록 해야함 Link통해서 프로젝트 정보 넘기고 자세한 데이터는 해당 페이지에서 호출하도록 해야함
  const [activeMenu, setActiveMenu] = useState("Current");

  const menuItems = [
    {
      key: "Current",
      label: "Current",
    },
    {
      key: "Past Events",
      label: "Past Events",
    },
  ];

  useEffect(() => {
    setProjects(boxesData);
  }, []);

  const handleMenuClick = (key: any) => {
    setActiveMenu(key);
  };
  return (
    <div className=" flex flex-col gap-12 pt-32 max-w-6xl mx-auto h-screen">
      <div>
        <div className=" text-4xl font-bold mb-4 mx-2 text-black">
          My List Rsvp
        </div>
        <div className=" flex items-center w-full justify-between">
          <div className=" flex flex-row gap-2">
            <BiSearch
              className=" flex items-center justify-center "
              size={32}
            />
            <input
              type="text"
              className=" border border-black w-80 h-6 p-4"
              placeholder="Find your Rsvp"
            />
          </div>
          <div className=" gap-2 flex flex-row">
            <Link
              to="/createpage"
              className=" border bg-yellow-500 shadow-md rounded-lg text-white font-bold text-xl px-3 py-2"
            >
              + new rsvp
            </Link>
            <button className=" border bg-black shadow-md text-white text-xl px-3 py-2 font-bold rounded-lg">
              Delete
            </button>
          </div>
        </div>
        <hr className=" mt-5 border-b-2" />
        <div className="flex bg-white text-black py-4 space-x-2 w-full">
          {menuItems.map((item) => (
            <button
              key={item.key}
              onClick={() => handleMenuClick(item.key)}
              className={`${
                activeMenu === item.key
                  ? "border-b-2 border-blue-500 pb-2 px-4"
                  : "border-transparent text-gray-400 pb-2 px-4"
              } focus:outline-none rounded-sm`}
            >
              <div className=" flex uppercase font-semibold text-xl items-center">
                <div>{item.label}</div>
              </div>
            </button>
          ))}
        </div>

        <div className=" w-full h-fit value">
          {activeMenu === "Current" && (
            <div className="   flex-row w-full grid gap-4 grid-cols-6">
              {projects.map(
                (
                  box: { eventName: string; status: string; location: string },
                  index: React.Key
                ) => (
                  <Link
                    key={index}
                    to={`${box.eventName}/`}
                    className="w-full col-span-2 gap-4  border rounded-xl h-fit p-5 items-center justify-between flex flex-col font-bold text-xl"
                  >
                    <div className="flex justify-between items-center w-full">
                      <div className="text-xl text-left w-full">
                        {box.eventName}
                      </div>
                      <div className="text-gray-400 text-sm w-fit whitespace-nowrap">
                        {box.status}
                      </div>
                    </div>
                    <div className=" flex w-full flex-row gap-2">
                      {/* <img src={logo} className=" w-28 object-contain " alt="" /> */}
                      <div className="flex  text-center w-28 h-28 bg-white border-[1px] rounded-lg text-sm text-gray-300 justify-center items-center">
                        이미지를
                        <br />
                        등록해주세요
                      </div>
                      <div className=" flex flex-col gap-2">
                        <div className="text-lg">D-0</div>
                        <div className="text-md font-medium">
                          {box.location}
                        </div>
                        <div className=" text-sm text-green-500">
                          ATTENDING 0
                        </div>
                        <div className=" text-sm text-red-500">
                          NOT ATTENDING 0
                        </div>
                      </div>
                    </div>
                    {/* <div className="  w-full h-8 p-3 bg-sky-100 font-bold items-center justify-center flex text-black">
                      URL : {name}.yourdrsvp &nbsp;
                      <BiSolidCopy />
                    </div> */}
                  </Link>
                )
              )}
            </div>
          )}
          {activeMenu === "Past Events" && (
            <div className=" border  w-80 h-48 p-5 items-center justify-center flex flex-col font-bold text-xl">
              yourD
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const boxesData = [
  {
    eventName: "festival",
    startDate: new Date()
      .toISOString()
      .replace("T", " ")
      .replace("Z", "")
      .slice(0, 19),
    endDate: new Date()
      .toISOString()
      .replace("T", " ")
      .replace("Z", "")
      .slice(0, 19),
    personnelLimits: 25,
    location: "seoul",
    status: "대기중",
    // 다른 데이터 필드를 추가할 수 있습니다.
  },
  {
    eventName: "KBW",
    startDate: new Date()
      .toISOString()
      .replace("T", " ")
      .replace("Z", "")
      .slice(0, 19),
    endDate: new Date()
      .toISOString()
      .replace("T", " ")
      .replace("Z", "")
      .slice(0, 19),
    personnelLimits: 25,
    location: "seoul",
    status: "대기중",
  },
  {
    eventName: "debutler Session",
    startDate: new Date()
      .toISOString()
      .replace("T", " ")
      .replace("Z", "")
      .slice(0, 19),
    endDate: new Date()
      .toISOString()
      .replace("T", " ")
      .replace("Z", "")
      .slice(0, 19),
    personnelLimits: 25,
    location: "seoul",
    status: "대기중",
    // 다른 데이터 필드를 추가할 수 있습니다.
  },
  // 여러 박스를 추가하려면 배열을 확장합니다.
];
