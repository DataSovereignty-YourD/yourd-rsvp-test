import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { FiAlertCircle } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import {
  AiOutlineArrowRight,
  AiFillEye,
  AiFillEyeInvisible,
} from 'react-icons/ai';
import '../../assets/css/login.css';
export default function LoginButton() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isEyeClick, setIsEyeClick] = useState(false);
  return (
    <div className="grid place-content-center">
      <button
        onClick={() => setIsOpen(true)}
        className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium px-4 py-2 rounded hover:opacity-90 transition-opacity"
      >
        sign In
      </button>
      <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}

const SpringModal: React.FC<{
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}> = ({ isOpen, setIsOpen }) => {
  const [showNewContent, setShowNewContent] = useState(false);
  const [isEyeClick, setIsEyeClick] = useState(false);
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-400/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer overflow-visible "
        >
          <motion.div
            initial={{ scale: 0, rotate: '12.5deg' }}
            animate={{ scale: 1, rotate: '0deg' }}
            exit={{ scale: 0, rotate: '0deg' }}
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
            className="bg-white text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative"
          >
            <div className="relative z-10">
              <div className="mb-2 text-4xl text-black font-bold grid place-items-center mx-auto">
                Let's get started
              </div>
              <h3 className="text-md font-bold text-center text-gray-400 mb-2">
                로그인/회원가입
              </h3>

              {showNewContent ? (
                <form>
                  <div className="mb-4">
                    <label className='mb-1 ml-1 block text-sm font-medium for="auth-user-email text-black'>
                      이메일*
                    </label>
                    <input
                      id="auth-user-email"
                      type="email"
                      required
                      placeholder="yourD@example.com"
                      className="w-full rounded border-[1px] border-slate-300 p-2 outline-yellow-400 text-black transition-colors focus:border-yellow-600"
                    />
                  </div>
                  <div className="mb-4">
                    <label className='mb-2 ml-1 block text-sm font-medium for="auth-user-email text-black'>
                      비밀번호*
                    </label>
                    <div className="relative w-full">
                      <input
                        id="auth-user-password"
                        type={isEyeClick ? 'text' : 'password'}
                        required
                        placeholder="*******"
                        className="w-full pl-3 pr-10 rounded border-[1px] border-slate-300 p-2 text-black outline-yellow-400 transition-colors focus:border-yellow-600"
                      />
                      <button
                       type='button'
                        onClick={() => setIsEyeClick(!isEyeClick)}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2"
                      >
                        {isEyeClick ? <AiFillEye color='darkgray' size={24} /> : <AiFillEyeInvisible color='darkgray' size={24} />}
                      </button>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="mb-2 w-full rounded bg-yellow-400 py-2 font-semibold text-white transition-opacity hover:bg-yellow-600 disabled:cursor-not-allowd disabled:bg-slate-500"
                  >
                    로그인/ 회원가입
                  </button>
                  <button
                    className="m4 flex w-full items-center justify-center text-center gap-2 rounded px-4 py-2 font-medium text-slate-700 transition-colors hover:text-yellow-400"
                    onClick={() => setShowNewContent(false)}
                  >
                    다른 로그인 방법 사용하기
                  </button>
                </form>
              ) : (
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
                <Link to='/project' className="flex w-full items-center justify-center text-center gap-2 rounded bg-yellow-400 px-4 py-2 text-lg font-medium text-white transition-colors hover:bg-yellow-600">
                    YourD Pass로 시작하기
                  </Link>
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
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
