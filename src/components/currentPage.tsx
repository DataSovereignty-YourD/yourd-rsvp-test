import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"; // Import motion and AnimatePresence

const Step = ({ num, isActive }: any) => {
  return (
    <div className="relative">
      <div
        className={`w-10 h-10 flex items-center justify-center shrink-0 border-2 rounded-full font-semibold text-sm relative z-10 transition-colors duration-300 ${
          isActive
            ? "border-indigo-600 bg-indigo-600 text-white"
            : "border-gray-300 text-gray-300"
        }`}
      >
        <AnimatePresence mode="wait">
          {isActive ? (
            <motion.svg
              key="icon-marker-check"
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              height="1.6em"
              width="1.6em"
              xmlns="http://www.w3.org/2000/svg"
              initial={{ rotate: 180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -180, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"></path>
            </motion.svg>
          ) : (
            <motion.span
              key="icon-marker-num"
              initial={{ rotate: 180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -180, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {num}
            </motion.span>
          )}
        </AnimatePresence>
      </div>
      {isActive && (
        <motion.div
          className="absolute z-0 -inset-1.5 bg-indigo-100 rounded-full animate-pulse"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </div>
  );
};

export default function CurrentPage() {
  const location = useLocation();
  const isOnCreateNamePage = location.pathname === "/createname";
  const isOnCreateDatePage = location.pathname === "/createdetail";
  const isOnCreateRsvpPage = location.pathname === "/creatersvp";

  return (
    <div className="flex items-center justify-between w-1/2 h-12">
      <Step num={1} isActive={isOnCreateNamePage} />
      <div className="flex items-center justify-center uppercase">
        RSVP Name
      </div>
      <div className="border-b border-black w-32 items-center justify-center flex"></div>
      <Step num={2} isActive={isOnCreateDatePage} />
      <div className="flex items-center justify-center uppercase">
        날짜 & 위치
      </div>
      <div className="border-b border-black w-32 items-center justify-center flex"></div>
      <Step num={3} isActive={isOnCreateRsvpPage} />
      <div className="flex items-center justify-center uppercase">
        Your RSVP
      </div>
    </div>
  );
}
