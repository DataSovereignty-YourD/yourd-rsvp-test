import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { useRecoilState } from "recoil";
import { projectModalState } from "../../recoil/dashBoard/project";
import React, { useEffect, useState } from "react";
import { sideBarToggleState } from "../../recoil/sideBarToggle";
import classNames from "classnames";
import { loginState } from "../../recoil/loginState";
import ProfileModal from "../../utils/profileModal";
import {
  AiOutlineSearch,
  AiOutlineMenuUnfold,
  AiOutlineMore,
  AiOutlineClose,
  AiOutlineMenuFold,
} from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineModeNight } from "react-icons/md";

import { PiUserCircle } from "react-icons/pi";

export default function ProjectTopBar() {
  const location = useLocation();
  const navigation = useNavigate();
  const [isOpen, setIsOpen] = useRecoilState(projectModalState);
  const [isSidebarVisible, setSidebarVisible] =
    useRecoilState(sideBarToggleState);
  const [isSearchBarVisible, setSearchBarVisible] = useState(false);
  const pathName = location.pathname;
  const isMain = pathName === "/project";
  const [activeTab, setActiveTab] = useState("profile");
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [menuToggle, setMenuToggle] = useState(false);
  const [isProfileToggle, setProfileToggle] = useState(false);
  const [isLoggedIn, setLoggedIn] = useRecoilState(loginState);

  const handleSearchIconClick = () => {
    return setSearchBarVisible(!isSearchBarVisible);
  };
  const [selectedItem, setSelectedItem] = useState(null);
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const closeDropdown = () => {
    setDropdownOpen(false);
  };
  const profileDropdown = () => {
    setProfileToggle(!isProfileToggle);
  };
  const closeProfileDropdown = () => {
    setProfileToggle(false);
  };

  window.addEventListener("resize", () => {
    // 현재 화면 너비
    const width = window.innerWidth;

    if (width <= 1024) {
      setSidebarVisible(false);
    }
  });

  return (
    <div className="fixed bg-white w-full  h-12 flex items-center z-20 drop-shadow-md">
      <div className="flex justify-between w-full mx-5 md:mx-10">
        <Link
          to="/"
          className="flex h-16 justify-center text-4xl font-bold  items-center p-4 rounded-md"
        >
          {" "}
          Your <span className="text-yellow-500 ">D</span> &nbsp;
          <span className="text-lg transform translate-y-1">: RSVP</span>
        </Link>
        <div className="flex items-center gap-1 md:gap-3">
          <Link
            to="/contact"
            className="hidden sm:flex h-16 justify-center items-center"
          >
            {/* <RoundedButton /> */}

            <span className=" px-5 py-[6px] font-pre-bold border-black border-2  transition-all duration-300 hover:bg-[#fccc00]">
              Upgrade
            </span>
          </Link>
          <Link
            to="/contact"
            className="hidden sm:flex h-16 justify-center items-center"
          >
            {/* <RoundedButton /> */}

            <span className=" px-5 py-[6px] font-pre-bold border-black border-2  transition-all duration-300 hover:bg-[#fccc00]">
              My Rsvp
            </span>
          </Link>
          <Link
            to="/contact"
            className="hidden sm:flex h-16 justify-center items-center"
          >
            {/* <RoundedButton /> */}

            <span className=" px-5 py-[6px] font-pre-bold border-black border-2 rounded-full transition-all duration-300 hover:bg-[#fccc00]">
              Contact Us
            </span>
          </Link>
          {/* user image */}
          <div className="hidden md:flex ">
            <div
              onClick={profileDropdown}
              className=" flex items-center justify-center rounded-md  dropdown  focus:outline-none focus:ring"
              // type="button"
            >
              <span className="inline-flex items-center hover:bg-gray-100 justify-center px-2.5 py-0.5 rounded-full text-xs font-medium">
                <PiUserCircle size={28} className=" " />
              </span>
            </div>
            <ProfileModal
              isProfileToggle={isProfileToggle}
              setProfileToggle={setProfileToggle}
              isLoggedIn={isLoggedIn}
              setLoggedIn={setLoggedIn}
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              navigation={navigation}
            />

            {isProfileToggle && (
              <div
                className="absolute w-screen h-screen inset-0 bg-black/5"
                onClick={closeProfileDropdown}
              />
            )}
          </div>

          {/* shrink icon */}
          <button
            className=" md:hidden rounded-md drop-shadow-md  duration-300"
            onClick={() => setMenuToggle(!menuToggle)}
          >
            {!menuToggle ? (
              <AiOutlineMore size={26} />
            ) : (
              <AiOutlineClose size={26} />
            )}
          </button>
        </div>
      </div>
      <div
        className={`absolute mt-28 border z-50 border-gray-100 shadow bg-white w-full ${classNames(
          "md:hidden",
          { hidden: !menuToggle }
        )}`}
      >
        <div className=" flex items-center py-3">
          <AiOutlineSearch size={30} color={"#007aff"} className="mx-4" />
          <div className="flex items-center justify-between w-full">
            <input
              id="header-search"
              placeholder="검색어를 입력하세요"
              type="text"
              className=" w-full h-10 px-3   rounded-md border border-gray-300 focus:outline-none focus:border-blue-500  "
            />
            <PiUserCircle size={32} className="mx-2" />
          </div>
        </div>
      </div>
    </div>
  );
}
