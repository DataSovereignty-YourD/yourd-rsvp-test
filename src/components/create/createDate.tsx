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

export default function CreateName() {
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
  const navigate = useNavigate();
  const [date, setDate] = useState(new Date());
  const [isCalendarStartVisible, setCalendarStartVisible] = useState(false);
  const [isCalendarEndVisible, setCalendarEndVisible] = useState(false);
  const [selectedStartTime, setSelectedStartTime] = useState<string>("");
  const [selectedEndTime, setSelectedEndTime] = useState<string>("");
  const [selectedStartMinute, setSelectedStartMinute] = useState<string>("");
  const [selectedEndMinute, setSelectedEndMinute] = useState<string>("");
  const [openPostcode, setOpenPostcode] = React.useState<boolean>(false);

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

  const handleSubmit = () => {
    let missingFields = []; // 누락된 필드를 저장할 배열

    // if (!location) missingFields.push("위치");
    // if (!startDate) missingFields.push("시작 날짜");
    // if (!endDate) missingFields.push("종료 날짜");
    // if (!startTime) missingFields.push("시작 시간");
    // if (!endTime) missingFields.push("종료 시간");

    // // 누락된 필드가 없으면 페이지 이동
    // if (missingFields.length === 0) {
    //   localStorage.setItem("invitationLocation", location);
    //   localStorage.setItem("invitationStartDate", startDate);
    //   localStorage.setItem("invitationEndDate", endDate);
    //   localStorage.setItem("invitationStartTime", startTime);
    //   localStorage.setItem("invitationEndTime", endTime);

    navigate("/creatersvp");
    // } else {
    //   // 누락된 필드가 있으면 해당 필드 이름을 경고 메시지에 포함하여 출력
    //   const missingMessage = missingFields.join(", ");
    //   console.warn(`다음 필드를 채워주세요: ${missingMessage}`);
    // }
  };

  return (
    <div className=" gap-12  flex bg-slate-100  mx-32  items-center justify-center h-screen  flex-col">
      <CurrentPage />
      <div className="   flex items-center text-black justify-center uppercase  p-5 font-semibold text-5xl">
        Detail about Rsvp
      </div>

      <div className="gap-6 flex flex-col">
        <div>
          <div>Event Start</div>
          <div className=" items-center justify-center  grid grid-cols-6 flex-row gap-6 ">
            <div className="col-span-4">
              <input
                className="  border  border-black rounded  h-12 p-4 w-full"
                placeholder="Date"
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
                <div>Hour</div>

                <TimeSelect
                  selectedTime={selectedStartTime}
                  setSelectedTime={setSelectedStartTime}
                  options={timeOptions}
                />
              </div>
            </div>
            <div className="col-span-1">
              <div>
                <div>Minutes</div>
                <TimeSelect
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
                className="  border border-black rounded w-full h-12 p-4"
                placeholder="Date"
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
                <div>Hour</div>
                <TimeSelect
                  selectedTime={selectedEndTime}
                  setSelectedTime={setSelectedEndTime}
                  options={timeOptions}
                />
              </div>
            </div>
            <div className="col-span-1">
              <div>
                <div>Minutes</div>
                <TimeSelect
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
              className="border border-black rounded w-full h-12 p-4"
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

      <button
        className="mt-16 flex h-16 font-bold text-3xl text-white  bg-black justify-center items-center p-4 rounded-md"
        onClick={handleSubmit} // onClick 이벤트에 handleSubmit 연결
      >
        CREATE RSVP
      </button>
    </div>
  );
}
