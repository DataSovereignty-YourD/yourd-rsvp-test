import { Link, useNavigate } from "react-router-dom";
import CurrentPage from "../currentPage";
import React, { useState } from "react";

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
  const [name, setName] = useState<string>("");
  const [peopleCount, setPeopleCount] = useState<string>(""); // How Many People에 대한 상태 추가
  const [buttonBgColor, setButtonBgColor] = useState<string>("black"); // 배경색 상태 추가

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (name && peopleCount) {
      // 수정된 부분
      console.log("입력된 이름:", name);
      console.log("인원 수:", peopleCount);
      localStorage.setItem("invitationName", name);
      localStorage.setItem("invitationPeopleCount", peopleCount);

      navigate("/createdetail");
    }
  };
  const checkInputValidity = () => {
    if (name && peopleCount) {
      setButtonBgColor("black");
    } else {
      setButtonBgColor("white");
    }
  };

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
                className=" border-b-4 border-blue-600  rounded w-80 h-12 p-4"
                placeholder="이름"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  checkInputValidity();
                }}
              ></input>
            </div>
          </div>
          <div>
            <div className="text-black-500 font-normal">How Many People</div>
            <div className=" items-center justify-center w-full gap-6 ">
              <input
                type="number"
                className=" border-b-4 border-blue-600 rounded w-80 h-12 p-4"
                placeholder="Number"
                value={peopleCount}
                onChange={(e) => {
                  setPeopleCount(e.target.value);
                  checkInputValidity();
                }}
              ></input>
            </div>
          </div>
        </div>
      </div>

      <button
        className={`mt-12 flex h-12 font-bold text-2xl w-80 uppercase text-yellow-500 bg-${buttonBgColor} justify-center items-center p-4 rounded-md`}
        onClick={handleSubmit}
      >
        Next
      </button>
    </div>
  );
};
export default CreatePage;
