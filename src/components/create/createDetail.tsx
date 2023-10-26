import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import CurrentPage from "../currentPage";
import DaumPostcode from "react-daum-postcode";
import "react-calendar/dist/Calendar.css";

function MyCalendar({ setDate, setVisible }: any) {
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

function TimeSelect({ selectedTime, setSelectedTime, options }: any) {
  return (
    <select
      className="border border-gray-300 rounded px-3 py-2"
      value={selectedTime}
      onChange={(e) => setSelectedTime(e.target.value)}
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
  const [startTime, setStartTime] = useState<string>("");
  const [endTime, setEndTime] = useState<string>("");
  const [startMinute, setStartMinute] = useState<string>("");
  const [endMinute, setEndMinute] = useState<string>("");
  const navigate = useNavigate();
  const [date, setDate] = useState(new Date());
  const [isCalendarStartVisible, setCalendarStartVisible] = useState(false);
  const [isCalendarEndVisible, setCalendarEndVisible] = useState(false);
  const [selectedStartTime, setSelectedStartTime] = useState<string>("");
  const [selectedEndTime, setSelectedEndTime] = useState<string>("");
  const [selectedStartMinute, setSelectedStartMinute] = useState<string>("");
  const [selectedEndMinute, setSelectedEndMinute] = useState<string>("");
  const [openPostcode, setOpenPostcode] = React.useState<boolean>(false);
  const [buttonBgColor, setButtonBgColor] = useState<string>("black"); // 배경색 상태 추가

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
    if (startDate && endDate && startMinute && endMinute && location) {
      setButtonBgColor("black");
    } else {
      setButtonBgColor("white");
    }
  };

  const handleSubmit = () => {
    // URL 쿼리 매개변수를 사용하여 값을 다음 페이지로 전달
    const queryParams = `?startDate=${startDate}&startMinute=${startMinute}&endDate=${endDate}&endMinute=${endMinute}&location=${location}`;
    navigate(`/creatersvp${queryParams}`);
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
                className="  border-b-4  border-blue-600 rounded  h-12 p-4 w-full"
                placeholder="시작 날짜"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
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
                  value={startTime}
                  selectedTime={selectedStartTime}
                  setSelectedTime={setSelectedStartTime}
                  options={timeOptions}
                />
              </div>
            </div>
            <div className="col-span-1">
              <div>
                <div className="flex items-center justify-center">Minutes</div>
                <TimeSelect
                  value={startMinute}
                  selectedTime={selectedStartMinute}
                  setSelectedTime={setSelectedStartMinute}
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
                className="  border-b-4  border-blue-600 rounded w-full h-12 p-4"
                placeholder="종료 날짜"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
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
                  value={endTime}
                  selectedTime={selectedEndTime}
                  setSelectedTime={setSelectedEndTime}
                  options={timeOptions}
                />
              </div>
            </div>
            <div className="col-span-1">
              <div>
                <div className="flex items-center justify-center">Minutes</div>
                <TimeSelect
                  value={endMinute}
                  selectedTime={selectedEndMinute}
                  setSelectedTime={setSelectedEndMinute}
                  options={minuteOptions}
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>Location</div>

          <div className=" items-center justify-center w-full flex-row gap-6 ">
            <input
              type="text"
              className="border-b-4  border-blue-600 rounded w-full h-12 p-4"
              placeholder="위치"
              value={location}
              readOnly // 이 부분을 추가하여 input을 읽기 전용으로 만듭니다.
              onClick={handle.clickButton}
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
        <button className="mt-12 flex w-40 h-12 font-bold text-3xl text-black bg-slate-200  justify-center items-center p-4 rounded-md">
          Back
        </button>
        <button
          className={`mt-12 flex h-12 font-bold text-2xl w-40 uppercase text-yellow-500 bg-${buttonBgColor} justify-center items-center p-4 rounded-md`}
          onClick={handleSubmit} // onClick 이벤트에 handleSubmit 연결
        >
          Next
        </button>
      </div>
    </div>
  );
}
