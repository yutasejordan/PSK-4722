import Button from "./Button";

export default function Table({ children }) {
  return (
    <table className="w-full mt-8 text-center border-collapse">
      <thead className="border-2 border-black">
        <tr className="bg-gray-300">
          <th className="p-2.5 border-2 border-black">#</th>
          <th className="p-2.5 border-2 border-black">Nama</th>
          <th className="p-2.5 border-2 border-black">NIM</th>
          <th className="p-2.5 border-2 border-black">Aksi</th>
        </tr>
      </thead>
      <tbody className="border-2 border-black">{children}</tbody>
    </table>
  );
}

export const TableBody = ({ id, nama, nim }) => {
  return (
    <tr className="bg-white">
      <td className="p-2.5 border-2 border-black">{id}</td>
      <td className="p-2.5 border-2 border-black">{nama}</td>
      <td className="p-2.5 border-2 border-black">{nim}</td>
      <td className="p-2.5 border-2 border-black">
        <Button text="Ubah" bgColor="bg-yellow-500 hover:bg-yellow-600" />
        <Button text="Hapus" bgColor="bg-red-500 hover:bg-red-600 ml-4" />
      </td>
    </tr>
  );
};
