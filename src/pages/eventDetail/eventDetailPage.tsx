import SideBar from "../sideBar";
import DashBoard from "./dashBoard";
import { Route, Routes } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useSessionStorage from "../../hooks/sesstionStorage";
import NotFoundPage from "../404Page";
import Publish from "./eventregister";

export default function EventDetailPage() {
  const [showNotFound, setShowNotFound] = useState(false);
  const [projectIndex, setProjectIndex] = useState(0);
  const { id } = useParams();

  if (showNotFound) {
    return <NotFoundPage />;
  }
  return (
    <div className="flex text-black h-full">
      <div id="sidebar" className="flex bg-white shadow-md max-w-[200px] z-10">
        <SideBar />
      </div>
      <div id="content" className="flex-1 mx-4 px-6 pt-16 min-h-screen">
        <Routes>
          <Route path="/" element={<Publish />} />
          <Route path="/dashboard" element={<DashBoard />} />
        </Routes>
      </div>
    </div>
  );
}
