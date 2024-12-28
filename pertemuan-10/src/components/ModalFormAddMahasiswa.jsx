import { useState } from "react";
import Button from "./Button";
import Swal from "sweetalert2";

const ModalFormAddMahasiswa = ({
  formActive,
  setFormActive,
  onAddMahasiswa,
}) => {
  const [name, setName] = useState("");
  const [nim, setNim] = useState("");

  const handleClick = (e) => {
    e.preventDefault();

    if (!name || !nim) {
      Swal.fire({
        icon: "error",
        text: "Pastikan Semua Kolom Terisi!",
      });
      return;
    }

    const newMahasiswa = {
      name,
      nim,
    };
    onAddMahasiswa(newMahasiswa);

    setName("");
    setNim("");

    Swal.fire({
      icon: "success",
      title: "Berhasil Menambahkan Mahasiswa!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div
      className={
        formActive
          ? "bg-white border-2 border-black p-6 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] rounded-lg shadow-xl z-20"
          : "hidden"
      }
    >
      <form>
        <h2 className="font-semibold text-xl mb-2">Tambah Mahasiswa</h2>
        <label className="mb-2">Nama:</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Masukkan nama mahasiswa..."
          className="w-full border-2 border-black rounded-md mb-2 px-2 py-2.5"
        />
        <label className="mb-2">NIM:</label>
        <input
          value={nim}
          onChange={(e) => setNim(e.target.value)}
          type="text"
          placeholder="Masukkan NIM mahasiswa..."
          className="w-full border-2 border-black rounded-md mb-2 px-2 py-2.5"
        />
        <div className="flex justify-end gap-2">
          <Button
            text="Batal"
            bgColor="bg-slate-600 hover:bg-slate-900"
            handleClick={(e) => {
              e.preventDefault();
              setFormActive();
            }}
          />
          <Button
            text="Simpan"
            bgColor="bg-green-600 hover:bg-green-900"
            handleClick={handleClick}
          />
        </div>
      </form>
    </div>
  );
};

export default ModalFormAddMahasiswa;
