import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-[18%] h-full text-white px-10 bg-slate-800 shadow-2xl ">
      <ul className="flex flex-col justify-center h-full">
        <li className="text-2xl mb-5 hover:translate-x-4 transition-all duration-500 cursor-pointer">
          <Link to="/">Dashboard</Link>
        </li>
        <li className="text-2xl mb-5 hover:translate-x-4 transition-all duration-500 cursor-pointer">
          <Link to="/inventorylist">Inventory List</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
