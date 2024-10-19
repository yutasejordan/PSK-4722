const Form = () => {
  return (
    <div className="w-full py-36 bg-gray-200">
      <div className="bg-white w-[45%] mx-auto rounded-xl p-16 shadow">
        <h3 className="font-bold text-3xl mb-6">SIADIN LOGIN!</h3>
        <div className="w-full border border-[rgba(0,0,0,0.1)] mb-4"></div>
        <input
          type="text"
          placeholder="NIM"
          className="block border border-[rgba(0,0,0,0.1)] rounded-md py-4 px-3 w-full mb-6 font-medium focus:outline-none font-[Roboto] text-sm"
        />
        <input
          type="password"
          placeholder="Password"
          className="block border border-[rgba(0,0,0,0.1)] rounded-md py-4 px-3 w-full mb-8 font-medium focus:outline-none font-[Roboto] text-sm"
        />
        <a
          href="#"
          className="font-semibold text-sm hover:text-[#FFC600] duration-300 cursor-pointer"
        >
          Siadin Activation/Reset Link
        </a>
        <span className="text-sm font-semibold opacity-70 inline-block indent-1 ">
          (Aktivasi/Reset/Lupa Password)
        </span>
        <br />
        <a
          href="#"
          className="font-semibold text-sm hover:text-[#FFC600] duration-300 cursor-pointer block mb-8"
        >
          Siadin Activation/Reset Tutorial
        </a>
        <button className="bg-[#FFC600] py-4 px-16 rounded-xl font-bold hover:bg-[#1153A1] hover:text-[#FFC600] duration-500">
          Login
        </button>
      </div>
    </div>
  );
};

export default Form;
