export default function SignIn() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="border border-red-600 w-[350px] h-1/2 bg-gray-100">
        <form>
          <input
            type="text"
            name="email"
            id="email"
            className="block w-[270px] rounded-md border-0 mx-auto mt-20 py-2.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-yellow-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-400 sm:text-sm sm:leading-6"
            placeholder="Email"
          />
        </form>
        <div className="ml-10">이메일을 잊으셨나요?</div>
        <form>
          <input
            type="text"
            name="password"
            id="password"
            className="block w-[270px] rounded-md border-0 mx-auto mt-5 py-2.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-yellow-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-400 sm:text-sm sm:leading-6"
            placeholder="Password"
          />
        </form>
        <div className="ml-10">이메일을 잊으셨나요?</div>
      </div>
    </div>
   );
}
