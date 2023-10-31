import { Link } from "react-router-dom";
import { useState } from "react";
import CurrentPage from "../../pages/currentPage";
import Login from "../common/login";

function CreateRsvp({ eventInfo }: { eventInfo: any }) {

  const [showLogin, setShowLogin] = useState(false);
  const handleClose = () => {
    setShowLogin(false);
  };

  return (
    <div className="  gap-8 w-full flex items-center justify-center h-fit  flex-col">
      <div className=" bg-slate-50 w-full h-fit rounded-2xl shadow-2xl pb-10">
        <div className="  flex items-center text-black justify-center uppercase  p-5 font-bold text-5xl">
          {eventInfo.eventName}
        </div>
        <div className="  gap-6 flex flex-col ">
          <div className="mx-24">
            <div>Event Start</div>
            <div className="  items-center justify-center  grid grid-cols-6 flex-row mx-auto gap-6  ">
              <div className="   border col-span-3 border-gray-200 shadow-md rounded  h-12 p-4">
                {eventInfo.startDate}
              </div>
              <div className="   border col-span-3 border-gray-200 shadow-md rounded  h-12 p-4">
                {eventInfo.startTime} : {eventInfo.startMinute}
              </div>
            </div>
          </div>
          <div className="mx-24">
            <div>Event End</div>
            <div className="  items-center justify-center  grid grid-cols-6 flex-row gap-6 ">
              <div className="   border col-span-3 border-gray-200 shadow-md rounded  h-12 p-4">
                {eventInfo.endDate}
              </div>
              <div className="   border col-span-3 border-gray-200 shadow-md rounded  h-12 p-4">
                {eventInfo.endTime} : {eventInfo.endMinute}
              </div>
            </div>
          </div>
          <div className="mx-24">
            <div>Location</div>
            <div className="  items-center justify-center w-full  flex-row gap-6 gap-">
              <div className="   border  border-gray-200 shadow-md rounded w-full h-12 p-4">
                {eventInfo.eventLocation}
              </div>
            </div>
          </div>
          <div className="mx-24">
            <div>How Many People</div>
            <div className="  items-center justify-center w-full  flex-row gap-6 gap-">
              <div className="   border  border-gray-200 shadow-md rounded w-full h-12 p-4">
                {eventInfo.maxAttendees}
              </div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={() => setShowLogin(true)} 
        className=" mt-8 flex h-16 font-bold text-3xl uppercase text-yellow-300 bg-black justify-center items-center p-4 rounded-md"
      >
        URL 생성하기
      </button>

      {showLogin && <Login initialOpen={showLogin} onClose={handleClose} />}
    </div>//일단 모달창이 바로 뜨게는 만들었는데 ****수정필요 

  );
}
export default CreateRsvp;
