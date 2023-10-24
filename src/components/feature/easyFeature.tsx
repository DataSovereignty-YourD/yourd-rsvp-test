import easy from "../../assets/img/analyticsMockup.png";

export default function EasyFeature() {
  return (
    <div className="flex bg-slate-100 border mx-32  items-center justify-center h-screen gap-12 flex-row">
      <div className="flex flex-row gap-12 items-center justify-center  ">
        <img src={easy} alt="" className="w-[700px]" />
      </div>
      <div className="flex r gpa-4 flex-col">
        <div className=" items-center justify-cente uppercase border p-5 font-bold text-5xl">
          쉬운 이벤트 관리
        </div>
        <div className="">- 고객 출입 관리</div>
        <div></div>
      </div>
    </div>
  );
}
