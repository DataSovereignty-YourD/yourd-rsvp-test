import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import CurrentPage from "../../pages/currentPage";
import DaumPostcode from "react-daum-postcode";
import "react-calendar/dist/Calendar.css";

function MyCalendar({ setDate, setVisible }: any) {
  const [event, setEvent] = useState({
    startEventDate: "",
    endEventDate: "",
    startEventTime: 0,
    startEventMinute: 0,
    endEventTime: 0,
    endEventMinute: 0,
    eventLocation: "",
  });
  const onChange = (newDate: Date | Date[]) => {
    if (Array.isArray(newDate)) {
      return;
    }
    const formattedDate = `${
      newDate.getMonth() + 1
    }월 ${newDate.getDate()}일 ${newDate.getFullYear()}년`;
    setDate(formattedDate);
    setVisible(false);
  };

  return <Calendar onChange={onChange as any} />;
}

function TimeSelect({ options, name }: any) {
  const [event, setEvent] = useState({
    startEventDate: "",
    endEventDate: "",
    startEventTime: 0,
    startEventMinute: 0,
    endEventTime: 0,
    endEventMinute: 0,
    eventLocation: "",
  });
  const onChange = (e: any) => {
    const { value, name } = e.target;
    setEvent({
      ...event,
      [name]: value,
    });
    console.log(name);
    console.log(value);
  };
  return (
    <select
      className="border border-gray-300 rounded px-3 py-2"
      name={name}
      onChange={onChange}
    >
      {options.map((option: string) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default function CreateDetail() {
  const timeOptions = [
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
  ];
  const minuteOptions = [
    "00",
    "05",
    "10",
    "15",
    "20",
    "25",
    "30",
    "35",
    "40",
    "45",
    "50",
    "55",
  ];
  const [location, setLocation] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const navigate = useNavigate();
  const [isCalendarStartVisible, setCalendarStartVisible] = useState(false);
  const [isCalendarEndVisible, setCalendarEndVisible] = useState(false);
  const [openPostcode, setOpenPostcode] = React.useState<boolean>(false);
  const [buttonBgColor, setButtonBgColor] = useState<string>("black"); // 배경색 상태 추가

  const [event, setEvent] = useState({
    startEventDate: "",
    endEventDate: "",
    startEventTime: 0,
    startEventMinute: 0,
    endEventTime: 0,
    endEventMinute: 0,
    eventLocation: "",
  });

  const onChange = (e: any) => {
    const { value, name } = e.target;
    setEvent({
      ...event,
      [name]: value,
    });
    console.log(value);
    console.log(name);
  };

  const handle = {
    // 버튼 클릭 이벤트
    clickButton: () => {
      setOpenPostcode((current) => !current);
    },

    // 주소 선택 이벤트
    selectAddress: (data: any) => {
      setLocation(data.address); // 선택된 주소를 state에 할당
      setOpenPostcode(false);
    },
  };

  const checkInputValidity = () => {
    if (
      event.startEventDate &&
      event.endEventDate &&
      event.startEventTime &&
      event.endEventTime &&
      event.startEventMinute &&
      event.endEventMinute &&
      event.eventLocation
    ) {
      setButtonBgColor("black");
    } else {
      setButtonBgColor("white");
    }
  };
  const navigatePrev = () => {
    navigate("/createpage");
  };

  const navigateNext = () => {
    navigate(`/creatersvp`);
  };

  return (
    <div className="  gap-12 flex bg-slate-100  mx-32  items-center justify-center h-screen  flex-col">
      <CurrentPage />
      <div className="gap-6">
        <div className=" flex items-center text-black justify-center p-5 font-semibold text-5xl">
          Detail about Rsvp
        </div>
        <div>
          write your event time and location about your rsvp. If your date is
          only oneday, you have to pick one day in both calendar.
        </div>
      </div>

      <div className="gap-6 flex flex-col">
        <div>
          <div>Event Start</div>
          <div className=" items-center justify-center  grid grid-cols-6 flex-row gap-6 ">
            <div className="col-span-4">
              <input
                name="startEventDate"
                className="border-b-4  border-blue-600 rounded  h-12 p-4 w-full"
                placeholder="시작 날짜"
                value={event.startEventDate}
                onChange={onChange}
                onClick={() => setCalendarStartVisible(!isCalendarStartVisible)}
              />
              {isCalendarStartVisible && (
                <div className="absolute bg-white border border-gray-300">
                  <MyCalendar
                    setDate={setStartDate}
                    setVisible={setCalendarStartVisible}
                  />
                </div>
              )}
            </div>

            <div className="col-span-1">
              <div className="flex flex-col">
                <div className="flex items-center justify-center">Hour</div>

                <TimeSelect
                  name="startEventTime"
                  value={event.startEventTime}
                  options={timeOptions}
                />
              </div>
            </div>
            <div className="col-span-1">
              <div>
                <div className="flex items-center justify-center">Minutes</div>
                <TimeSelect
                  name="endEventMinute"
                  onChange={onChange}
                  value={event.endEventMinute}
                  options={minuteOptions}
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>Event End</div>

          <div className=" items-center justify-center  grid grid-cols-6 flex-row gap-6 ">
            <div className="col-span-4">
              <input
                name="endEventDate"
                className="  border-b-4  border-blue-600 rounded w-full h-12 p-4"
                placeholder="종료 날짜"
                value={event.endEventDate}
                onChange={onChange}
                onClick={() => setCalendarEndVisible(!isCalendarEndVisible)}
              />
              {isCalendarEndVisible && (
                <div className="absolute bg-white border border-gray-300">
                  <MyCalendar
                    setDate={setEndDate}
                    setVisible={setCalendarEndVisible}
                  />
                </div>
              )}
            </div>
            <div className="col-span-1">
              <div>
                <div className="flex items-center justify-center">Hour</div>
                <TimeSelect
                  name="endEventTime"
                  value={event.endEventTime}
                  options={timeOptions}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="col-span-1">
              <div>
                <div className="flex items-center justify-center">Minutes</div>
                <TimeSelect
                  name="endEventMinute"
                  value={event.endEventMinute}
                  options={minuteOptions}
                  onChange={onChange}
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>Location</div>

          <div className=" items-center justify-center w-full flex-row gap-6 ">
            <input
              name="eventLocation"
              type="text"
              className="border-b-4  border-blue-600 rounded w-full h-12 p-4"
              placeholder="위치"
              value={event.eventLocation}
              readOnly // 이 부분을 추가하여 input을 읽기 전용으로 만듭니다.
              onClick={handle.clickButton}
              onChange={onChange}
            />

            {openPostcode && (
              <DaumPostcode
                onComplete={handle.selectAddress}
                autoClose={false}
              />
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center gap-6">
        <button
          className="mt-12 flex w-40 h-12 font-bold text-3xl text-black bg-slate-200  justify-center items-center p-4 rounded-md"
          onClick={navigatePrev}
        >
          Back
        </button>
        <button
          className={`mt-12 flex h-12 font-bold text-2xl w-40 uppercase text-yellow-500 bg-${buttonBgColor} justify-center items-center p-4 rounded-md`}
          onClick={navigateNext} // onClick 이벤트에 handleSubmit 연결
        >
          Next
        </button>
      </div>
    </div>
  );
}
