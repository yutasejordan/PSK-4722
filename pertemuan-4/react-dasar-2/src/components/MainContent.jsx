import { useState } from "react";
import Button from "./Button";
import Table from "./Table";
import Swal from "sweetalert2";

const MainContent = () => {
  const [isAddActive, setIsAddActive] = useState(false);
  const [isEditActive, setIsEditActive] = useState(false);

  const tambahMahasiswa = () => {
    setIsAddActive(!isAddActive);
  };

  const editMahasiswa = () => {
    setIsEditActive(!isEditActive);
  };

  const hapusMahasiswa = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <main className="text-black w-full h-[80%] my-20 px-4 py-2 ">
      <header className="flex justify-between items-center">
        <h3 className="font-semibold">Daftar User</h3>
        <Button
          text="Tambah"
          style="bg-green-600 hover:bg-green-900"
          handleClick={tambahMahasiswa}
        />
      </header>
      <table className="w-full mt-8 text-center border-collapse">
        <thead className="border-2 border-black">
          <tr className="bg-gray-300">
            <th className="p-5 border-2 border-black">#</th>
            <th className="p-5 border-2 border-black">Nama</th>
            <th className="p-5 border-2 border-black">NIM</th>
            <th className="p-5 border-2 border-black">Aksi</th>
          </tr>
        </thead>
        <tbody className="border-2 border-black">
          <Table
            nama="Yutase Jordan Amrullah"
            id="1"
            nim="A11.2022.14505"
            editMahasiswa={editMahasiswa}
            hapusMahasiswa={hapusMahasiswa}
          />
          <Table
            nama="Joko Edi Sulistyo"
            id="2"
            nim="A11.2022.15000"
            editMahasiswa={editMahasiswa}
            hapusMahasiswa={hapusMahasiswa}
          />
          <Table
            nama="Sapuan"
            id="3"
            nim="A11.2022.11233"
            editMahasiswa={editMahasiswa}
            hapusMahasiswa={hapusMahasiswa}
          />
        </tbody>
      </table>
      <div
        className={
          isAddActive
            ? "bg-white p-6 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] rounded-lg shadow-xl z-20"
            : "hidden"
        }
      >
        <form>
          <h2 className="font-semibold text-xl mb-2">Tambah User</h2>
          <label className=" mb-2">Nama:</label>
          <input
            type="text"
            className="w-full border-2 border-black rounded-md mb-2"
          />
          <div className="flex justify-end gap-2">
            <Button text="Batal" style="bg-slate-600 hover:bg-slate-900" />
            <Button text="Simpan" style="bg-green-600 hover:bg-green-900" />
          </div>
        </form>
      </div>
      <div
        className={
          isAddActive
            ? "fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.6)] z-10"
            : ""
        }
      ></div>
      <div
        className={
          isEditActive
            ? "bg-white p-6 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] rounded-lg shadow-xl z-20"
            : "hidden"
        }
      >
        <form>
          <h2 className="font-semibold text-xl mb-2">Edit User</h2>
          <label className=" mb-2">Nama:</label>
          <input
            type="text"
            className="w-full border-2 border-black rounded-md mb-2"
          />
          <div className="flex justify-end gap-2">
            <Button text="Batal" style="bg-slate-600 hover:bg-slate-900" />
            <Button text="Simpan" style="bg-green-600 hover:bg-green-900" />
          </div>
        </form>
      </div>
      <div
        className={
          isEditActive
            ? "fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.6)] z-10"
            : ""
        }
      ></div>
    </main>
  );
};

export default MainContent;
