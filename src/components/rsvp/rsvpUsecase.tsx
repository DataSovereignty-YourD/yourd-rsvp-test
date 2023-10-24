export default function RsvpUsecase() {
  return (
    <div className="flex bg-slate-100 border mx-32  items-center justify-center h-screen gap-24 flex-col">
      <div className="flex flex-col gap-32 w-full">
        <div className=" flex items-center text-black justify-center uppercase  p-5 font-bold text-5xl">
          Usecase
        </div>
        <div className="flex flex-row gap-8 itmes-center justify-center">
          <div className="w-80 h-80 border border-black items-center justify-center flex text-3xl font-semibold">
            For Party
          </div>
          <div className="w-80 h-80 border border-black items-center justify-center flex text-3xl font-semibold">
            For Wedding
          </div>
          <div className="w-80 h-80 border border-black items-center justify-center flex text-3xl font-semibold">
            For Popup
          </div>
          <div className="w-80 h-80 border border-black items-center justify-center flex text-3xl font-semibold">
            For Private
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
}
