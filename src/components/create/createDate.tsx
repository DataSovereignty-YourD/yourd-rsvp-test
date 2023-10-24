import { Link, useNavigate } from "react-router-dom";
import CurrentPage from "../currentPage";
import React, { useState } from "react";

export default function CreateName() {
  const [location, setLocation] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [startTime, setStartTime] = useState<string>("");
  const [endTime, setEndTime] = useState<string>("");
  const navigate = useNavigate();

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (value: Date | Date[]) => {
    if (Array.isArray(value)) {
      // 여러 날짜를 선택할 수 있는 범위 선택 모드인 경우
      // 이 예제에서는 시작 날짜만 설정합니다.
      setSelectedDate(value[0]);
    } else {
      setSelectedDate(value);
    }
  };
  const handleSubmit = () => {
    if (location && startTime && endTime && startDate && endDate) {
      console.log("위치:", location);
      console.log("시작 날자:", startDate);
      console.log("종료 날짜:", endDate);
      console.log("시작 시간:", startTime);
      console.log("종료 시간:", endTime);
      localStorage.setItem("invitationLocation", location);
      localStorage.setItem("invitationStartDate", startDate);
      localStorage.setItem("invitationEndDate", endDate);
      localStorage.setItem("invitationStartTime", startTime);
      localStorage.setItem("invitationEndTime", endTime);
      navigate("/creatersvp");
    }
  };

  return (
    <div className=" gap-12  flex bg-slate-100  mx-32  items-center justify-center h-screen  flex-col">
      <CurrentPage />
      <div className="   flex items-center text-black justify-center uppercase  p-5 font-bold text-5xl">
        When is Your Event?
      </div>
      <div className=" gap-6 flex flex-col">
        <div>
          <div>Event Start</div>
          <div className=" items-center justify-center  grid grid-cols-6 flex-row gap-6 ">
            <input
              className="  border col-span-3 border-black rounded w-80 h-12 p-4"
              placeholder="Date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            ></input>

            <input
              className="  border col-span-3 border-black rounded w-80 h-12 p-4"
              placeholder="Time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
            ></input>
          </div>
        </div>
        <div>
          <div>Event End</div>
          <div className=" items-center justify-center  grid grid-cols-6 flex-row gap-6 ">
            <input
              className="  border col-span-3 border-black rounded w-80 h-12 p-4"
              placeholder="Date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            ></input>
            <input
              className="  border col-span-3 border-black rounded w-80 h-12 p-4"
              placeholder="Time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
            ></input>
          </div>
        </div>
        <div>
          <div>Location</div>

          <div className=" items-center justify-center w-full flex-row gap-6 ">
            <input
              type="text"
              className="border col-span-6 border-black rounded w-full h-12 p-4"
              placeholder="위치"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
        </div>
      </div>

      <button
        className="mt-16 flex h-16 font-bold text-3xl text-white  bg-black justify-center items-center p-4 rounded-md"
        onClick={handleSubmit}
      >
        CREATE RSVP
      </button>
    </div>
  );
}
