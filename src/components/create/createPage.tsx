import { Link, useNavigate } from "react-router-dom";
import CurrentPage from "../../pages/currentPage";
import React, { useState } from "react";

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

const CreatePage: React.FC = () => {
  // 값 저장하기
  const [event, setEvent] = useState({
    eventName: "",
    eventPeopleLimit: 0,
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

  const [buttonBgColor, setButtonBgColor] = useState<string>("black"); // 배경색 상태 추가

  const navigate = useNavigate();
  const navigateNext = () => {
    navigate("/createdetail");
  };

  // 입력값이 다 들어오면 배경색이 바뀜
  const checkInputValidity = () => {
    if (event.eventName && event.eventPeopleLimit) {
      setButtonBgColor("black");
    } else {
      setButtonBgColor("white");
    }
  };
  // 숫자만 들어오게 설정
  const isNumeric = (value: string) => {
    return /^\d+$/.test(value);
  };

  return (
    <div
      className={`gap-8 flex bg-slate-50 mx-32 items-center justify-center h-screen flex-col`}
    >
      <CurrentPage />
      <div className=" flex items-center text-black justify-center  p-5 font-bold text-5xl">
        What is Your Event?
      </div>
      <div className=" flex flex-row gap-16 ">
        <Preview />
        <div className=" gap-6 flex flex-col items-center justify-center">
          <div>
            <div className="text-black-500 font-normal">Your RSVP Name</div>
            <div className=" items-center justify-center gap-6 ">
              <input
                name="eventName"
                type="text"
                placeholder="이름"
                className=" border-b-4 border-blue-600  rounded w-80 h-12 p-4"
                value={event.eventName}
                onChange={onChange}
              ></input>
            </div>
          </div>
          <div>
            <div className="text-black-500 font-normal">How Many People</div>
            <div className=" items-center justify-center w-full gap-6 ">
              <input
                name="eventPeopleLimit"
                type="number"
                placeholder="Number"
                className=" border-b-4 border-blue-600 rounded w-80 h-12 p-4"
                value={event.eventPeopleLimit}
                onChange={onChange}
              ></input>
            </div>
          </div>
        </div>
      </div>

      <button
        className={`mt-12 flex h-12 font-bold text-2xl w-80 uppercase text-yellow-500 bg-${buttonBgColor} justify-center items-center p-4 rounded-md`}
        onClick={navigateNext}
      >
        Next
      </button>
    </div>
  );
};
export default CreatePage;
