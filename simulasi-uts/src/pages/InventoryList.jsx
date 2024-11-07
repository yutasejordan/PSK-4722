import ItemDetail from "./ItemDetail";

const InventoryList = ({ items, onDeleteItem, onToggleItem }) => {
  return (
    <div className="w-full flex justify-between py-5">
      <section className="p-5 bg-white w-1/2 rounded-lg shadow-lg">
        <h2 className="font-bold text-4xl mb-4 self-center">Daftar Barang</h2>
        {items.map((item) => (
          <div className="bg-slate-200 p-7 rounded-lg mb-4">
            <div className="flex justify-between items-center">
              <h2 className="font-bold text-xl mb-2">{item.name}</h2>
              <input
                type="checkbox"
                checked={item.checked}
                onClick={() => onToggleItem(item.id)}
                className="w-4.5"
              />
            </div>
            <div className="flex justify-between items-center">
              <p>{item.category}</p>
              <span
                className="ri-close-large-line text-red-700 font-black cursor-pointer"
                onClick={() => onDeleteItem(item.id)}
              ></span>
            </div>
          </div>
        ))}
      </section>
      <div className="w-1/2 pl-4">
        <ItemDetail items={items} />
      </div>
    </div>
  );
};

export default InventoryList;
