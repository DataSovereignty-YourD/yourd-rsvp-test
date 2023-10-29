import qr from "../../assets/img/offlinePass.png";
import { CgArrowLongDown } from "react-icons/cg";

export default function QrFeature() {
  return (
    <div className="flex bg-slate-100 border mx-32  items-center justify-center h-screen  gap-24  flex-col">
      <div className=" flex items-center justify-center uppercase border p-5 font-bold text-5xl">
        손쉽게 QR로 사람을 초대하세요
      </div>
      <div className="flex flex-row gap-48 items-center justify-center  ">
        <img src={qr} alt="" className="w-[400px]" />
        <div className="gap-8 flex flex-col">
          <div className="border border-gray-400 rounded-2xl p-4 shadow-lg items-center justify-center flex text-2xl font-bold bg-orange-50">
            초대장 양식 생성
          </div>
          <CgArrowLongDown
            size={32}
            className="flex items-center justify-center w-full"
          />

          <div className="border border-gray-400 rounded-2xl p-4 shadow-lg items-center justify-center flex text-2xl font-bold bg-orange-50">
            URL 발급 및 배포
          </div>
          <CgArrowLongDown
            size={32}
            className="flex items-center justify-center w-full"
          />
          <div className="border border-gray-400 rounded-2xl p-4 shadow-lg items-center justify-center flex text-2xl font-bold bg-orange-50">
            QR로 전달
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
