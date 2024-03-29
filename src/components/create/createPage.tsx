import { Link, useNavigate } from "react-router-dom";
import CurrentPage from "../../pages/currentPage";
import React, { useState } from "react";
import StepIndicator from "./stepIndicator";

// 로고 이미지 넣기
const Preview = () => {
  const [imageSrc, setImageSrc]: any = useState(null);

  const onUpload = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    return new Promise<void>((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result || null); // 파일의 컨텐츠
        resolve();
      };
    });
  };

  return (
    <div className=" flex flex-col gap-2 items-center justify-center">
      <div className="text-black font-normal">Your Logo</div>
      <img width="240px" height="240px" src={imageSrc} className="" />
      <input
        accept="image/*"
        multiple
        type="file"
        onChange={(e) => onUpload(e)}
        className="text-sm items-center justify-center flex "
      />
    </div>
  );
};

function CreatePage({ setEventInfo }: { setEventInfo: any }) {
  const [eventName, setEventName] = useState("");
  const [maxAttendees, setMaxAttendees] = useState("");
  const onChange = (e: any) => {
    const { value, name } = e.target;
    setEventInfo((prevEventInfo: any) => ({
      ...prevEventInfo,
      [name]: value,
    }));
    if (name == "eventName") {
      setEventName(value);
    } else {
      setMaxAttendees(value);
    }
  };
  // 숫자만 들어오게 설정
  const isNumeric = (value: string) => {
    return /^\d+$/.test(value);
  };

  return (
    <div
      className={`gap-8 flex w-full items-center justify-center h-fit flex-col`}
    >
      {/* <CurrentPage /> */}
      <div className=" flex items-center text-black justify-center  p-5 font-bold text-5xl">
        What is Your Event?
      </div>
      <div className=" flex flex-row gap-16 w-full justify-between">
        <Preview />
        <div className=" gap-6 w-full flex flex-col items-center justify-center">
          <div>
            <div className="text-black-500 font-normal">Your RSVP Name</div>
            <div className=" items-center justify-center gap-6 ">
              <input
                name="eventName"
                type="text"
                placeholder="이름"
                className=" border-b-4 border-blue-600  rounded w-80 h-12 p-4"
                value={eventName}
                onChange={onChange}
              ></input>
            </div>
          </div>
          <div>
            <div className="text-black-500 font-normal">How Many People</div>
            <div className=" items-center justify-center w-full gap-6 ">
              <input
                name="maxAttendees"
                type="number"
                placeholder="Number"
                className=" border-b-4 border-blue-600 rounded w-80 h-12 p-4"
                value={maxAttendees}
                onChange={onChange}
              ></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CreatePage;
