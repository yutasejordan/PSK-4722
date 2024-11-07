import Button from "../components/Button";

export default function AdminLayout({ children }) {
  return (
    <div className="w-screen h-screen grid grid-cols-7 grid-rows-10">
      <aside className="bg-purple-950 row-span-10 text-white pt-3 pl-3">
        <h2 className="font-bold text-2xl mb-2">Admin Panel</h2>
        <ul className="mx-3">
          <li className="mb-2 font-medium">
            <a href="#">Dashboard</a>
          </li>
          <li className="mb-2 font-medium flex justify-between">
            <a href="#">Users</a>
            <i className="ri-arrow-down-s-line"></i>
          </li>
          <li className="mb-2 font-medium">
            <a href="#">Settings</a>
          </li>
        </ul>
      </aside>
      <header className="bg-white shadow-lg col-span-6 flex justify-end items-center pr-4 relative">
        <Button text="Log Out" bgColor="bg-blue-600 hover:bg-blue-700" />
      </header>
      <main className="bg-slate-200 col-span-6 row-span-8 py-4 px-4">
        {children}
      </main>
      <footer className="bg-white shadow-2xl col-span-6 flex justify-center items-center">
        <span className="font-semibold text-lg">&copy;2024 yutasejordan</span>
      </footer>
    </div>
  );
}
