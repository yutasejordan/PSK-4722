const Sidebar = () => {
  return (
    <div className="w-[18%] bg-purple-950 h-full">
      <h2 className="font-semibold text-3xl ml-6 my-6">Admin Panel</h2>
      <ul className="ml-8">
        <a href="#">
          <li className="text-lg mb-2 hover:translate-x-2 transition-all">
            Dashboard
          </li>
        </a>
        <a href="#">
          <li className="text-lg mb-2 hover:translate-x-2 transition-all">
            Users
          </li>
        </a>
        <a href="#">
          <li className="text-lg mb-2 hover:translate-x-2 transition-all">
            Settings
          </li>
        </a>
      </ul>
    </div>
  );
};

export default Sidebar;
