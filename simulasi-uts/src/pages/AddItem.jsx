import { useState } from "react";

const AddItem = ({ onAddItem }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("");
  const [price, setPrice] = useState("");
  const stockNum = [...Array(51)].map((_, i) => (
    <option value={i} key={i}>
      {i}
    </option>
  ));

  const handleClick = (e) => {
    e.preventDefault();

    if (!name || !category || !stock || !price) {
      Swal.fire({
        icon: "error",
        text: "Pastikan Semua Kolom Terisi!",
      });
      return;
    }

    const newItem = {
      name,
      category,
      stock,
      price,
      id: Date.now(),
      checked: false,
    };
    onAddItem(newItem);

    setName("");
    setCategory("");
    setStock("");
    setPrice("");

    Swal.fire({
      icon: "success",
      title: "Berhasil Menambahkan Barang!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <section className="p-10">
      <h2 className="font-bold text-4xl mb-4 text-center">Tambah Barang</h2>
      <div className="p-10 bg-white rounded-xl shadow-xl">
        <form className="flex flex-col">
          <label className="font-medium mb-1.5">Nama Barang:</label>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="nama barang..."
          />
          <label className="font-medium mb-1.5">Kategori:</label>
          <Input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="kategori barang..."
          />
          <label className="font-medium mb-1.5">Stok:</label>
          <select
            className="bg-slate-200 rounded-md mb-4 shadow px-2 py-3"
            value={stock}
            onChange={(e) => setStock(Number(e.target.value))}
          >
            {stockNum}
          </select>
          <label className="font-medium mb-1.5">Harga:</label>
          <Input
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            placeholder="harga barang..."
          />
          <button
            className="bg-green-500 hover:bg-green-600 transition-all py-3 px-5 text-white rounded-md font-medium text-lg mt-2"
            onClick={handleClick}
          >
            Tambah
          </button>
        </form>
      </div>
    </section>
  );
};

const Input = ({ value, onChange, placeholder }) => {
  return (
    <input
      type="text"
      className="bg-slate-200 rounded-md mb-4 shadow-md px-2 py-3 font-medium"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default AddItem;
