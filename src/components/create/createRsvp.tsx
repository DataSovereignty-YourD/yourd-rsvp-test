import { Link } from "react-router-dom";
import CurrentPage from "../currentPage";
import { useLocation } from "react-router-dom";

const CreateRsvp: React.FC = () => {
  const name = localStorage.getItem("invitationName");
  const location = localStorage.getItem("invitationLocation");
  const startDate = localStorage.getItem("invitationStartDate");
  const endDate = localStorage.getItem("invitationEndDate");
  const startTime = localStorage.getItem("invitationStartTime");
  const endTime = localStorage.getItem("invitationEndTime");

  const peopleCount = localStorage.getItem("invitationPeopleCount");

  return (
    <div className="  gap-8  flex bg-slate-100  mx-32  items-center justify-center h-screen  flex-col">
      <CurrentPage />
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
      </div>

      <Link
        to="/project"
        className=" mt-8 flex h-16 font-bold text-3xl uppercase text-yellow-300 bg-black justify-center items-center p-4 rounded-md"
      >
        {" "}
        URL 생성하기
      </Link>
    </div>
  );
};
export default CreateRsvp;
