import Button from "../../components/Button";
import Table, { TableBody } from "../../components/Table";

const Mahasiswa = () => {
  return (
    <>
      <header className="flex justify-between">
        <h2 className="font-semibold">Daftar User</h2>
        <Button text="Tambah" bgColor="bg-green-600 hover:bg-green-700" />
      </header>
      <Table>
        <TableBody id="1" nama="yutase" nim="A11.2022.14505" />
        <TableBody id="2" nama="joko" nim="A11.2022.14500" />
      </Table>
    </>
  );
};

export default Mahasiswa;
