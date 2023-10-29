import { Link } from "react-router-dom";
import { useState } from "react";
import CurrentPage from "../../pages/currentPage";
import Login from "../login/login";

function CreateRsvp({eventInfo}:{eventInfo:any}) {
  const name = localStorage.getItem("invitationName");
  const location = localStorage.getItem("invitationLocation");
  const startDate = localStorage.getItem("invitationStartDate");
  const endDate = localStorage.getItem("invitationEndDate");
  const startTime = localStorage.getItem("invitationStartTime");
  const endTime = localStorage.getItem("invitationEndTime");

  const peopleCount = localStorage.getItem("invitationPeopleCount");
  const [showLogin, setShowLogin] = useState(false);  // 일단 로그인 해야 하므로 로직 처리 코드
  return (
    <div className="  gap-8 w-full flex items-center justify-center h-fit  flex-col">
      <div className=" bg-slate-50 w-full h-fit rounded-2xl shadow-2xl pb-10">
        <div className="  flex items-center text-black justify-center uppercase  p-5 font-bold text-5xl">
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
      </div>
      <button
        onClick={() => setShowLogin(true)}
        className=" mt-8 flex h-16 font-bold text-3xl uppercase text-yellow-300 bg-black justify-center items-center p-4 rounded-md"
      >
        URL 생성하기
      </button>
      {showLogin && <Login initialOpen={showLogin} />} 
    </div>//일단 모달창이 바로 뜨게는 만들었는데 ****수정필요 
  );
};
export default CreateRsvp;
