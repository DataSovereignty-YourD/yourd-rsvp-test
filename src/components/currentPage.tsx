import { useLocation } from "react-router-dom";

export default function CurrentPage() {
  const location = useLocation();
  const isOnCreateNamePage = location.pathname === "/createname";
  const isOnCreateDatePage = location.pathname === "/createdate";
  const isOnCreateRsvpPage = location.pathname === "/creatersvp";

  return (
    <div className="flex items-center justify-between  w-1/2 h-12">
      <div
        className={`border rounded-full w-10 h-10 p-2 text-3xl font-bold flex items-center justify-center ${
          isOnCreateNamePage ? "bg-yellow-200" : ""
        }`}
      >
        1
      </div>
      <div className="flex items-center justify-center uppercase">
        RSVP Name
      </div>
      <div className="border-b border-black w-32 items-center justify-center flex"></div>
      <div
        className={`border rounded-full w-10 h-10 p-2 text-3xl font-bold flex items-center justify-center ${
          isOnCreateDatePage ? "bg-yellow-300" : ""
        }`}
      >
        2
      </div>
      <div className="flex items-center justify-center uppercase">
        날짜 & 위치
      </div>
      <div className="border-b border-black w-32 items-center justify-center flex"></div>
      <div
        className={`border rounded-full w-10 h-10 p-2 text-3xl font-bold flex items-center justify-center ${
          isOnCreateRsvpPage ? "bg-yellow-500" : ""
        }`}
      >
        3
      </div>
      <div className="flex items-center justify-center uppercase">
        Your RSVP
      </div>
    </div>
  );
}
