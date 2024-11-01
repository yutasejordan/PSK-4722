import MainHeader from "./MainHeader";
import MainFooter from "./MainFooter";
import MainContent from "./MainContent";

const Main = () => {
  return (
    <div className="w-[82%] h-full bg-gray-200 flex flex-col relative">
      <MainHeader />
      <MainContent />
      <MainFooter />
    </div>
  );
};

export default Main;
