import logoUdinus from "../img/Logo-Udinus-Official-02.png";

const Footer = () => {
  return (
    <footer className="w-screen bg-[#1153A1] ">
      <div className=" flex justify-evenly py-16 items-center">
        <img src={logoUdinus} alt="logo udinus" className="w-64 h-64" />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.2256738234487!2d110.4064856749841!3d-6.982674068379267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b4ec52229d7%3A0xc791d6abc9236c7!2sUniversitas%20Dian%20Nuswantoro!5e0!3m2!1sid!2sid!4v1728663001161!5m2!1sid!2sid"
          width="450"
          height="300"
        ></iframe>
        <div className="">
          <h2 className="text-white font-semibold text-lg mb-6">Contact Us</h2>
          <ul>
            <li className="mb-4">
              <i class="ri-home-line text-[#FFC600] text-xl mr-4"></i>
              <p className="inline-block text-white font-medium">
                Main Campus : 207 Imam Bonjol Street
              </p>
            </li>
            <li className="mb-4">
              <i class="ri-home-line text-[#FFC600] text-xl mr-4"></i>
              <p className="inline-block text-white font-medium">
                Other Campus : 5-11 Nakula I Street
              </p>
            </li>
            <li className="mb-4">
              <i class="ri-phone-line text-[#FFC600] text-xl mr-4"></i>
              <p className="inline-block text-white font-medium">
                (024) 3517261
              </p>
            </li>
            <li className="mb-4">
              <i class="ri-mail-line text-[#FFC600] text-xl mr-4"></i>
              <p className="inline-block text-white font-medium">
                sekretariat@dinus.ac.id
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full bg-[#021D3A] p-9 text-white text-center font-semibold">
        <p>
          UNIVERSITAS DIAN NUSWANTORO SEMARANG BY YAYASAN DIAN NUSWANTORO ||
          Copyright © 2015 - 2024 PSI UDINUS All right Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
