import { useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [registerForm, setRegisterForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [registerMessage, setRegisterMessage] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000", registerForm);
      setRegisterMessage(`Registration successful: ${response.data.message}`);
    } catch (err) {
      setRegisterMessage(
        `Error: ${err.response ? err.response.data.message : err.message}`
      );
    }
  };

  return (
    <div>
      <h1 className="font-semibold text-xl">Admin Dashboard</h1>

      <h2 className="mt-8 font-medium text-lg">Register</h2>
      <form onSubmit={handleRegister} className="mt-4">
        <div className="mb-2">
          <label className="block font-medium">Username:</label>
          <input
            type="text"
            value={registerForm.username}
            onChange={(e) =>
              setRegisterForm({ ...registerForm, username: e.target.value })
            }
            className="border rounded px-2 py-1 w-full"
          />
        </div>
        <div className="mb-2">
          <label className="block font-medium">Email:</label>
          <input
            type="email"
            value={registerForm.email}
            onChange={(e) =>
              setRegisterForm({ ...registerForm, email: e.target.value })
            }
            className="border rounded px-2 py-1 w-full"
          />
        </div>
        <div className="mb-2">
          <label className="block font-medium">Password:</label>
          <input
            type="password"
            value={registerForm.password}
            onChange={(e) =>
              setRegisterForm({ ...registerForm, password: e.target.value })
            }
            className="border rounded px-2 py-1 w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Register
        </button>
      </form>
      {registerMessage && <p className="mt-4 text-sm">{registerMessage}</p>}
    </div>
  );
};

export default Dashboard;
