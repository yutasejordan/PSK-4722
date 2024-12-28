import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function AdminLayout({ children }) {
  return (
    <div className="w-screen h-screen grid grid-cols-7 grid-rows-10">
      <aside className="bg-slate-900 row-span-10 text-white pt-3 pl-3">
        <h2 className="font-bold text-2xl mb-8">Admin Panel</h2>
        <ul className="mx-3">
          <li className="mb-4 font-medium text-lg hover:ml-4 transition-all duration-500">
            <Link to="/mahasiswa">Mahasiswa</Link>
          </li>
          <li className="mb-4 font-medium text-lg hover:ml-4 transition-all duration-500">
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </aside>
      <header className="bg-white shadow-lg col-span-6 flex justify-end items-center pr-4 z-10">
        <Link to="/">
          <Button text="Log Out" bgColor="bg-blue-600 hover:bg-blue-700" />
        </Link>
      </header>
      <main className="bg-slate-200 col-span-6 row-span-8 py-4 px-4 relative">
        {children}
      </main>
      <footer className="bg-white shadow-2xl col-span-6 flex justify-center items-center z-10">
        <span className="font-semibold text-lg">&copy;2024 yutasejordan</span>
      </footer>
    </div>
  );
}
