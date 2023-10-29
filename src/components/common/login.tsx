import { AnimatePresence, motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { loginState } from '../../recoil/loginState';
import { useEffect, useState } from 'react';
import {
  AiOutlineArrowRight,
  AiFillEye,
  AiFillEyeInvisible,
} from 'react-icons/ai';
export default function Login({
  initialOpen,
  onClose,
}: {
  initialOpen: boolean;
  onClose: () => void;
}) {
  // ... 기존 코드
  const [isOpen, setIsOpen] = useState<boolean>(initialOpen);
  const [isEyeClick, setIsEyeClick] = useState(false);
  useEffect(() => {
    setIsOpen(initialOpen);
  }, [initialOpen]);

  return (
    <div className=" grid place-content-center">
      <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} onClose={onClose} />
    </div>
  );
}
interface SpringModalProps {
  isOpen: boolean; // isOpen은 boolean 타입입니다.
  setIsOpen: (isOpen: boolean) => void; // setIsOpen은 함수이며 boolean 값을 인자로 받고 반환값은 없습니다.
  onClose: () => void; // onClose도 함수이며 인자를 받지 않고 반환값은 없습니다.
}
const SpringModal: React.FC<{
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onClose: () => void;
}> = ({ isOpen, setIsOpen, onClose }) => {
  const navigate = useNavigate(); // React Router v6의 useNavigate 훅
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);
  const [showNewContent, setShowNewContent] = useState(false);
  const [isEyeClick, setIsEyeClick] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // 로그인 로직
    // 예를 들어, 서버에 로그인 요청을 보내고 응답을 기다리는 로직입니다.

    // 로그인 요청이 성공적으로 완료되었다고 가정하면:
    setIsLoggedIn(true); // Recoil 상태 업데이트
    setIsOpen(false); // 로컬 isOpen 상태를 false로 설정하여 모달 닫기
    onClose(); // 부모 컴포넌트의 상태도 업데이트하기 위해 onClose 호출
    navigate('/project'); // 사용자를 '/project' 경로로 리디렉션
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="bg-slate-400/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: '12.5deg' }}
            animate={{ scale: 1, rotate: '0deg' }}
            exit={{ scale: 0, rotate: '0deg' }}
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
            className="bg-white text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="mb-2 text-4xl text-black font-bold grid place-items-center mx-auto">
                Let's get started
              </div>
              <h3 className="text-md font-bold text-center text-gray-400 mb-2">
                로그인/회원가입
              </h3>

              <>
                {/* <button className="flex w-full items-center justify-center text-center gap-2 rounded bg-yellow-400 px-4 py-2 text-lg font-medium text-white transition-colors hover:bg-yellow-600">
                    YourD Login으로 시작하기
                  </button>
                  <div className="mb-2 mt-3 flex items-center gap-2">
                    <div className="h-[1px] w-full bg-slate-400"></div>
                    <span className="text-slate-400">or</span>
                    <div className="h-[1px] w-full bg-slate-400"></div>
                  </div> */}
                {/* <button className="flex w-full items-center justify-center text-center gap-2 rounded bg-yellow-400 px-4 py-2 text-lg font-medium text-white transition-colors hover:bg-yellow-600">
                    YourD Pass로 시작하기    ====== 일단은 주석처리 해둔 부분 ***지우지 말것
                  </button> */}
                <button
                  className="flex w-full items-center justify-center text-center gap-2 rounded bg-yellow-400 px-4 py-2 text-lg font-medium text-white transition-colors hover:bg-yellow-600"
                  onClick={handleLogin} // onClick 이벤트에 handleLoginSuccess 함수 연결
                >
                  YourD Pass로 시작하기
                </button>
                <div className="mb-2 mt-3 flex items-center gap-2">
                  <div className="h-[1px] w-full bg-slate-400"></div>
                  <span className="text-slate-400">or</span>
                  <div className="h-[1px] w-full bg-slate-400"></div>
                </div>
                <button
                  className="flex w-full items-center justify-center gap-2 font-medium text-slate-700 transition-colors hover:text-yellow-400"
                  onClick={() => setShowNewContent(true)}
                >
                  <span>이메일로 시작하기</span>
                  <AiOutlineArrowRight />
                </button>
              </>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
