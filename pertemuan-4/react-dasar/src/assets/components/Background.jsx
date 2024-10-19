import background from "../img/wisuda.jpg";

const Background = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(27, 44, 69, .8), rgba(27, 44, 69, .8)) ,url(${background})`,
      }}
      className="w-screen h-[50vh] bg-cover bg-center"
    >
      <div className="w-full px-[12%] flex flex-col justify-center h-full">
        <h2 className="font-bold text-[52px] text-white">Login</h2>
        <a className="font-semibold text-lg text-white">
          Home /{" "}
          <span className="text-[#FFC600]">Halaman Login Siadin Mahasiswa</span>
        </a>
      </div>
    </div>
  );
};

export default Background;
