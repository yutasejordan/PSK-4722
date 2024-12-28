import AdminLayout from "./layouts/AdminLayout";
import Mahasiswa from "./pages/admin/Mahasiswa";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/admin/Dashboard";

function App() {
  return (
    <Router>
      <AdminLayout>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/mahasiswa" element={<Mahasiswa />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </AdminLayout>
    </Router>
  );
}

export default App;
