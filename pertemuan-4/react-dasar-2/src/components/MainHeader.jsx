import Button from "./Button";

const MainHeader = () => {
  return (
    <header className="bg-white py-4 px-4 text-end shadow-lg absolute left-0 right-0 top-0">
      <Button text="Logout" style="bg-blue-600 hover:bg-blue-900" />
    </header>
  );
};

export default MainHeader;
