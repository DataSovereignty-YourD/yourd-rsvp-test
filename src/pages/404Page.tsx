import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigation = useNavigate();
    return (
      <div className="fixed bg-white left-0 top-0 z-50 w-full h-full flex justify-center items-center">
        <div className="w-[768px] flex items-start justify-center">
          <div className="flex flex-col space-y-4 w-1/2 text-black">
            <h1 className="text-6xl">404</h1>
            <h2 className="text-3xl">PAGE NOT FOUND!</h2>
            <button
              onClick={() => navigation("/")}
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
            >
              Back Home
            </button>
          </div>
          <div className="w-1/2"></div>
        </div>
      </div>
    );
  }