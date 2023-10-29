import bgImg from "../../assets/img/background1.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { loginState } from "../../recoil/loginState";
export default function MainHeroSection() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);

  const handleCreateRsvpClick = () => {
    // Create RSVP 버튼 클릭 시 리다이렉트를 처리합니다.
    navigate(isLoggedIn ? "/createname" : "/login");
  };

  return (
    <div className="flex   mx-32  items-center justify-center h-screen  ">
      <img src={bgImg} alt="bgimg" className="absolute  z-[-1] w-fit blur-md" />

      <div className="flex flex-col z-8 items-center justify-center">
        <div className=" flex items-center text-black justify-center uppercase  p-5 font-bold text-5xl">
          Rsvp
        </div>
        <div className="text-4xl font-bold">
          당신의 사람들에게 초대장을 보내세요.
        </div>

        {/* <button
          className="flex w-60 h-32  mt-32 justify-center bg-black text-white  font-bold text-xl items-center p-4 rounded-md"
          onClick={handleCreateRsvpClick}
        >
          {isLoggedIn ? "Create RSVP" : "Create RSVP"}{" "}
        </button> */}
         <Link to='/eventform'
          className="flex w-60 h-32  mt-32 justify-center bg-black text-white  font-bold text-xl items-center p-4 rounded-md"
      
        >rsvp생성버튼</Link>
      </div>
    </div>
  );
}
