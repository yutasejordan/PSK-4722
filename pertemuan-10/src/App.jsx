import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import Mahasiswa from "./pages/admin/Mahasiswa";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/admin/Dashboard";

function App() {
  return (
    <div className="w-screen h-screen bg-slate-900">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Navigate to="mahasiswa" />} />
            <Route path="mahasiswa" element={<Mahasiswa />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
