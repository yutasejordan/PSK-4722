import Button from "../../components/Button";
import ModalFormAddMahasiswa from "../../components/ModalFormAddMahasiswa";
import Table, { TableBody } from "../../components/Table";
import { useState } from "react";

const Mahasiswa = () => {
  const [formActive, setFormActive] = useState(false);
  const [mahasiswa, setMahasiswa] = useState([]);
  const modalFormTambahMahasiswa = () => setFormActive(!formActive);
  const handleAddMahasiswa = (mhs) => setMahasiswa([...mahasiswa, mhs]);

  return (
    <>
      <header className="flex justify-between">
        <h2 className="font-semibold text-xl">Admin Mahasiswa</h2>
        <Button
          text="Tambah"
          bgColor="bg-green-600 hover:bg-green-700"
          handleClick={modalFormTambahMahasiswa}
        />
      </header>
      <Table>
        {mahasiswa.map((mhs, i) => (
          <TableBody id={i + 1} nama={mhs.name} nim={mhs.nim} key={i} />
        ))}
      </Table>
      <ModalFormAddMahasiswa
        formActive={formActive}
        setFormActive={modalFormTambahMahasiswa}
        onAddMahasiswa={handleAddMahasiswa}
      />
    </>
  );
};

export default Mahasiswa;
