import rsvp from "../../assets/img/rsvp.png";

export default function CustomFeature() {
  return (
    <div className=" flex bg-slate-200 border mx-32  items-center justify-between h-3/4  flex-row">
      {/* <div className="  flex items-center justify-center uppercase border p-5 font-bold text-2xl">
        이벤트에 적합한 커스텀
      </div> */}
      <div className=" flex flex-row  overflow-hidden gap-12">
        <img src={rsvp} alt="" className=" w-80" />
        <img src={rsvp} alt="" className=" w-80" />
        <img src={rsvp} alt="" className=" w-80" />
        <img src={rsvp} alt="" className=" w-80" />
        <img src={rsvp} alt="" className=" w-80" />
      </div>
      <div></div>
    </div>
  );
}
