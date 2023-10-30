import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import CurrentPage from "../../pages/currentPage";
import DaumPostcode from "react-daum-postcode";
import "react-calendar/dist/Calendar.css";
import { startOptimizedAppearAnimation } from "framer-motion";
import { validateHeaderValue } from "http";

function TimeSelect({ options, name, setEventInfo, value }: any) {
  const onChange = (e: any) => {
    const { value } = e.target;
    setEventInfo((prevEventInfo: any) => ({
      ...prevEventInfo,
      [name]: value,
    }));
  };

  return (
    <select
      className="border border-gray-300 rounded px-3 py-2"
      name={name}
      value={value}
      onChange={onChange}
    >
      {options.map((option: any) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default function CreateDetail({ setEventInfo }: { setEventInfo: any }) {
  const [location, setLocation] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [startTime, setStartTime] = useState<string>("");
  const [endTime, setEndTime] = useState<string>("");
  const [startMinute, setStartMinute] = useState<string>("");
  const [endMinute, setEndMinute] = useState<string>("");
  const navigate = useNavigate();
  const [isCalendarStartVisible, setCalendarStartVisible] = useState(false);
  const [isCalendarEndVisible, setCalendarEndVisible] = useState(false);
  const [openPostcode, setOpenPostcode] = React.useState<boolean>(false);

  function MyCalendar({
    setEventInfo,
    selectedDateType, // 'startDate' 또는 'endDate'인지 식별
    setVisible, // 달력 닫기 함수
  }: any) {
    const today = new Date();
    const isStartDate = selectedDateType === "startDate";

    const onChange = (newDate: any) => {
      if (Array.isArray(newDate)) {
        return;
      }

      if (newDate < today) {
        return;
      }

      const formattedDate = `${
        newDate.getMonth() + 1
      }월 ${newDate.getDate()}일 ${newDate.getFullYear()}년`;

      // startDate 또는 endDate를 업데이트
      setEventInfo((prevEventInfo: any) => ({
        ...prevEventInfo,
        [isStartDate ? "startDate" : "endDate"]: formattedDate,
      }));

      if (isStartDate) {
        setStartDate(formattedDate);
      } else {
        setEndDate(formattedDate);
      }

      // 날짜를 선택한 후 창 닫기
      setVisible(false);
    };

    return <Calendar onChange={onChange} minDate={today} />;
  }

  const handle = {
    // 버튼 클릭 이벤트
    clickButton: () => {
      setOpenPostcode((current) => !current);
    },

    // 주소 선택 이벤트
    selectAddress: (data: any) => {
      const name = "eventLocation"; // input 요소의 name
      const value = data.address; // 주소 데이터에서 가져온 값을 사용

      // 주소를 선택하면 eventLocation을 업데이트합니다.
      setEventInfo((prevEventInfo: any) => ({
        ...prevEventInfo,
        [name]: value,
      }));
      setLocation(value);
      setOpenPostcode(false);
    },
  };

  return (
    <div className="  gap-12 flex w-full  items-center justify-center h-fit  flex-col">
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
                name="startDate"
                className="border-b-4  border-blue-600 rounded  h-12 p-4 w-full"
                placeholder="시작 날짜"
                value={startDate}
                readOnly
                onClick={() => setCalendarStartVisible(!isCalendarStartVisible)}
              />
              {isCalendarStartVisible && (
                <div className="absolute bg-white border border-gray-300">
                  <MyCalendar
                    setEventInfo={setEventInfo}
                    selectedDateType="startDate"
                    setVisible={setCalendarStartVisible} // 달력에서 날짜를 선택하면 달력을 숨기도록 추가
                  />
                </div>
              )}
            </div>

            <div className="col-span-1">
              <div className="flex flex-col">
                <div className="flex items-center justify-center">Hour</div>

                <TimeSelect
                  name="startTime"
                  setEventInfo={setEventInfo}
                  options={timeOptions}
                />
              </div>
            </div>
            <div className="col-span-1">
              <div>
                <div className="flex items-center justify-center">Minutes</div>
                <TimeSelect
                  name="startMinute"
                  setEventInfo={setEventInfo}
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
                name="endDate"
                className="border-b-4  border-blue-600 rounded  h-12 p-4 w-full"
                placeholder="종료 날짜"
                value={endDate}
                readOnly
                onClick={() => setCalendarEndVisible(!isCalendarEndVisible)}
              />
              {isCalendarEndVisible && (
                <div className="absolute bg-white border border-gray-300">
                  <MyCalendar
                    setEventInfo={setEventInfo}
                    selectedDateType="endDate"
                    setVisible={setCalendarEndVisible} // 달력에서 날짜를 선택하면 달력을 숨기도록 추가
                  />
                </div>
              )}
            </div>
            <div className="col-span-1">
              <div>
                <div className="flex items-center justify-center">Hour</div>
                <TimeSelect
                  name="endTime"
                  setEventInfo={setEventInfo}
                  options={timeOptions}
                />
              </div>
            </div>
            <div className="col-span-1">
              <div>
                <div className="flex items-center justify-center">Minutes</div>
                <TimeSelect
                  name="endMinute"
                  setEventInfo={setEventInfo}
                  options={minuteOptions}
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>Location</div>
          <div className="flex-row gap-6">
            <input
              className="border-b-4 border-blue-600 rounded w-full h-12 p-4"
              placeholder="위치"
              readOnly
              value={location}
              onClick={handle.clickButton}
            />

            {openPostcode && (
              <DaumPostcode
                onComplete={(data) => {
                  handle.selectAddress(data);
                }}
                autoClose={false}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

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
