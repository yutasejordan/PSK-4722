import { useEffect, useState } from "react";
import logoUdinus from "../img/Logo-Udinus-Official-02.png";
import logoAkreditasi from "../img/akreditas.png";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  });

  let scrollActive = scroll
    ? "fixed animate-[toBottom_1.5s_ease-out_1] z-50"
    : null;

  return (
    <nav
      className={`w-screen py-4 px-[10%] bg-[#1153A1] flex items-center justify-between  shadow shadow-[#1153A1]  transition-all ${scrollActive} `}
    >
      <div className="logo flex items-center ">
        <img src={logoUdinus} alt="logo udinus" className="w-14 h-w-14 " />
        <img
          src={logoAkreditasi}
          alt="logo akreditasi unggul"
          className="w-16 h-w-16 rounded-full"
        />
      </div>
      <h1 className="text-[#FFC600] font-bold text-[28px] -translate-x-8">
        PORTAL UDINUS
      </h1>
      <span></span>
    </nav>
  );
};
export default Navbar;
