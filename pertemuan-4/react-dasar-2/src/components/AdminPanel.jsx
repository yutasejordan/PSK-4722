import Sidebar from "./Sidebar";
import Main from "./Main";

const AdminPanel = () => {
  return (
    <div className="w-screen flex h-screen">
      <Sidebar />
      <Main />
    </div>
  );
};

export default AdminPanel;
