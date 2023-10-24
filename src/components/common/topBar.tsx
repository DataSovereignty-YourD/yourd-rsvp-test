import { useState } from "react";
import { Link } from "react-router-dom";

export default function TopBar() {
  const [isTopBarVisible, setTopBarVisible] = useState(false);
  const solutions = [
    {
      id: 1,
      solution: "Create",
      path: "yourd_pass",
    },
  ];

  return (
    <div className="flex flex-col w-screen  fixed z-10">
      <div
        className={`bg-white  w-full flex justify-between items-start px-4 sm:px-[5%] transition-all duration-300 `}
      >
        <Link
          to="/"
          className="flex h-16 justify-center text-4xl font-bold  items-center p-4 rounded-md"
        >
          {" "}
          Your <span className="text-yellow-500 ">D</span> &nbsp;
          <span className="text-lg transform translate-y-1">: RSVP</span>
        </Link>

        <div
          onMouseLeave={() => setTopBarVisible(false)}
          className="flex flex-row h-16  sm:gap-6 items-center justify-center"
        >
          {}
          <Link
            to="/contact"
            className="hidden sm:flex h-16 justify-center items-center"
          >
            {/* <RoundedButton /> */}

            <span className=" px-5 py-[6px] font-pre-bold border-black border-2 rounded-full transition-all duration-300 hover:bg-[#fccc00]">
              Contact Us
            </span>
          </Link>
          <Link
            to="/login"
            className="hidden sm:flex h-16 justify-center items-center"
          >
            {/* <RoundedButton /> */}

            <span className=" px-5 py-[6px] font-pre-bold bg-yellow-500 text-black  border-2 rounded-full transition-all duration-300 hover:bg-[#fccc00]">
              Login
            </span>
          </Link>
          <div className="block sm:hidden items-center"></div>
        </div>
      </div>
      {/* <div
        className={`hidden sm:flex justify-between w-full absolute mt-16 bg-white transition-all duration-300
                  ${isTopBarVisible ? `h-[136px]` : " h-0"}
                `}
      >
        <div />
        
      </div> */}
    </div>
  );
}
