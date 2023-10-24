import { Link } from "react-router-dom";
import React, { useState } from "react";
import { BiSolidCopy, BiSearch } from "react-icons/bi";
import logo from "../assets/img/YourD_Logo.jpg";

export default function ListRsvp() {
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

  const boxesData = [
    {
      name: "name",
      status: "unpublished",
      // 다른 데이터 필드를 추가할 수 있습니다.
    },
    {
      name: "Box 2",
      status: "published",
    },
    {
      name: "name",
      status: "unpublished",
      // 다른 데이터 필드를 추가할 수 있습니다.
    },
    {
      name: "Box 2",
      status: "published",
    },
    // 여러 박스를 추가하려면 배열을 확장합니다.
  ];
  const name = localStorage.getItem("invitationName");
  const startDate = localStorage.getItem("invitationStartDate");
  const endDate = localStorage.getItem("invitationEndDate");
  const startTime = localStorage.getItem("invitationStartTime");
  const endTime = localStorage.getItem("invitationEndTime");
  const location = localStorage.getItem("invitationLocation");
  const peopleCount = localStorage.getItem("invitationPeopleCount");

  const [activeMenu, setActiveMenu] = useState("Current");

  const handleMenuClick = (key: any) => {
    setActiveMenu(key);
  };
  return (
    <div className=" flex flex-col gap-12 pt-32 mx-80 h-screen">
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
              to="/createname"
              className=" border bg-yellow-500 shadow-md rounded-3xl text-white font-bold text-xl p-4"
            >
              + new rsvp
            </Link>
            <button className=" border bg-black shadow-md text-white text-xl p-4 font-bold rounded-3xl">
              Delete
            </button>
          </div>
        </div>
        <hr className=" mt-5 border-b-4" />
        <nav className=" bg-white text-black p-4">
          <ul className=" flex gap-16 mx-auto space-x-4">
            {menuItems.map((item) => (
              <li key={item.key}>
                <button
                  onClick={() => handleMenuClick(item.key)}
                  className={`${
                    activeMenu === item.key
                      ? "border-b-2 border-blue-500"
                      : "border-transparent"
                  } focus:outline-none hover:bg-gray-100 rounded-sm`}
                >
                  <div className=" flex uppercase font-semibold text-xl items-center">
                    <div>{item.label}</div>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className=" w-full h-fit value">
          {activeMenu === "Current" && (
            <div className="   flex-row w-full grid gap-4 grid-cols-6">
              {boxesData.map((box, index) => (
                <div
                  key={index}
                  className=" w-full border gap-6 flex flex-col rounded-xl col-span-2"
                >
                  <Link
                    to="/project"
                    className="  gap-4  h-48 p-5 items-center justify-between flex flex-col font-bold text-xl"
                  >
                    <div>D-Day 5</div>
                    <div className=" flex w-full flex-row">
                      <img src={logo} className=" w-32" alt="" />
                      <div className="flex flex-col justify-between w-full items-center ">
                        <div>{name}</div>
                        <div className=" flex flex-col gap-3">
                          <div className=" text-sm">
                            시작일 : {startDate},{startTime}
                          </div>

                          <div className=" text-sm">
                            마지막일 : {endDate}, {endTime}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <div className="  w-full h-8 p-3 bg-sky-100 font-bold items-center justify-center flex text-black">
                    URL : {name}.yourdrsvp &nbsp;
                    <BiSolidCopy />
                  </div>
                </div>
              ))}
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
