import { Link, useNavigate } from "react-router-dom";
import CurrentPage from "../currentPage";
import React, { useState } from "react";

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

      navigate("/createdate");
    }
  };
  const checkInputValidity = () => {
    if (name && peopleCount) {
      setButtonBgColor("black"); // 유효한 경우 배경색을 초록색으로 변경
    } else {
      setButtonBgColor("white"); // 유효하지 않은 경우 배경색을 검은색으로 유지
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
      <div className="flex items-center text-black justify-center uppercase p-5 font-bold text-5xl">
        What is Your Event?
      </div>
      <div className="gap-6 flex flex-col">
        <div>
          <div>Your RSVP Name</div>
          <div className="items-center justify-center grid grid-cols-6 flex-row gap-6 gap-">
            <input
              className="border col-span-6 border-black rounded w-80 h-12 p-4"
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
          <div>How Many People</div>
          <div className="items-center justify-center w-full flex-row gap-6 gap-">
            <input
              type="number"
              className="border border-black rounded w-full h-12 p-4"
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

      <button
        className={`mt-16 flex h-16 font-bold text-2xl uppercase text-yellow-500 bg-${buttonBgColor} justify-center items-center p-4 rounded-md`}
        onClick={handleSubmit}
      >
        Next
      </button>
    </div>
  );
};
export default CreatePage;
