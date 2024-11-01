import Button from "./Button";

const Table = ({ nim, nama, id, editMahasiswa, hapusMahasiswa }) => {
  return (
    <tr className="bg-white">
      <td className="p-4 border-2 border-black">{id}</td>
      <td className="p-4 border-2 border-black">{nama}</td>
      <td className="p-4 border-2 border-black">{nim}</td>
      <td className="p-4 border-2 border-black">
        <Button
          text="Ubah"
          style="bg-yellow-400 hover:bg-yellow-700"
          handleClick={editMahasiswa}
        />
        <Button
          text="Hapus"
          style="bg-red-600 hover:bg-red-900 ml-4"
          handleClick={hapusMahasiswa}
        />
      </td>
    </tr>
  );
};

export default Table;
