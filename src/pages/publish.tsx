import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { projectType } from "../recoil/dashBoard/project";
import { Link } from "react-router-dom";

import Path from "../components/project/path";
import { BiSolidUserCircle } from "react-icons/bi";
import {
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiOutlineCheckSquare,
  AiOutlineCloseSquare,
  AiOutlineUsergroupDelete,
} from "react-icons/ai";

export default function Publish() {
  const name = localStorage.getItem("invitationName");
  const location = localStorage.getItem("invitationLocation");
  const startDate = localStorage.getItem("invitationStartDate");
  const endDate = localStorage.getItem("invitationEndDate");
  const startTime = localStorage.getItem("invitationStartTime");
  const endTime = localStorage.getItem("invitationEndTime");

  const peopleCount = localStorage.getItem("invitationPeopleCount");

  return (
    <div
      id="usermanagement"
      className="min-h-[calc(100vh-4rem)] max-h-full pb-10 "
    >
      <h1 className="font-bold text-black mb-2 uppercase text-2xl">
        Publish RSVP
      </h1>
      <div className="  w-full h-fit  flex flex-col gap-12 items-center justify-center mt-24">
        <div className=" bg-slate-50 w-2/3 h-1/2 rounded-2xl shadow-2xl">
          <div className="  mt-3  flex items-center text-black justify-center uppercase  p-5 font-bold text-5xl">
            {name}
          </div>

          <div className="  gap-6 flex flex-col ">
            <div className="mx-24">
              <div>Event Start</div>
              <div className="  items-center justify-center  grid grid-cols-6 flex-row mx-auto gap-6  ">
                <div className="   border col-span-3 border-gray-200 shadow-md rounded  h-12 p-4">
                  {startDate}
                </div>
                <div className="   border col-span-3 border-gray-200 shadow-md rounded  h-12 p-4">
                  {startTime}
                </div>
              </div>
            </div>
            <div className="mx-24">
              <div>Event End</div>
              <div className="  items-center justify-center  grid grid-cols-6 flex-row gap-6 ">
                <div className="   border col-span-3 border-gray-200 shadow-md rounded  h-12 p-4">
                  {endDate}
                </div>
                <div className="   border col-span-3 border-gray-200 shadow-md rounded  h-12 p-4">
                  {endTime}
                </div>
              </div>
            </div>
            <div className="mx-24">
              <div>Location</div>
              <div className="  items-center justify-center w-full  flex-row gap-6 gap-">
                <div className="   border  border-gray-200 shadow-md rounded w-full h-12 p-4">
                  {location}
                </div>
              </div>
            </div>
            <div className="mx-24">
              <div>How Many People</div>
              <div className="  items-center justify-center w-full  flex-row gap-6 gap-">
                <div className="   border  border-gray-200 shadow-md rounded w-full h-12 p-4">
                  {peopleCount}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 flex items-center justify-center  bg-black text-yellow-300">
            <Link
              to="dashboard"
              className=" gap-2  p-5 items-center justify-between flex flex-col font-bold text-xl"
            >
              <div className=" border border-black w-full h-16 items-center rounded-3xl justify-center flex flex-col gap-3 font-bold text-3xl">
                PUBLISH
              </div>
            </Link>
          </div>
          <div className=" w-full"></div>
        </div>
      </div>
    </div>
  );
}
