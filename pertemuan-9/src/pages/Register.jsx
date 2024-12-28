import { Link } from "react-router-dom";
import Button from "../components/Button";

const Register = () => {
  return (
    <form
      onSubmit={(e) => e.preventDefault}
      className="bg-white w-[500px] p-6 shadow-lg rounded-lg absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <h2 className="mb-5 font-semibold text-xl">Register</h2>
      <label className="">Username</label>
      <input
        type="text"
        className="w-full border-2 border-black rounded-md my-2 px-2 py-2.5"
        placeholder="masukkan username anda..."
      />
      <label className="mb-2">Password</label>
      <input
        type="password"
        className="w-full border-2 border-black rounded-md my-2 px-2 py-2.5"
        placeholder="masukkan password anda..."
      />
      <div className="flex gap-2">
        <Link to="/">
          <Button
            text="Register"
            bgColor="bg-slate-500 hover:bg-slate-600 transition-all mt-4"
          />
        </Link>
      </div>
    </form>
  );
};

export default Register;
