import { Link } from "react-router-dom";

const InventoryList = ({ items }) => {
  return (
    <div className="w-full flex justify-between">
      <section className="p-5 bg-white w-full rounded-lg shadow-lg flex flex-col">
        <h2 className="font-bold text-4xl mb-4 text-center">Daftar Barang</h2>
        <div className="flex justify-between items-center flex-wrap gap-y-4">
          {items.map((item) => (
            <Link to={`/itemdetail/${item.id}`} key={item.id}>
              <div className="bg-slate-200 p-7 rounded-lg w-[570px] hover:bg-slate-300 transition-all">
                <div className="flex justify-between items-center">
                  <h2 className="font-bold text-xl mb-2">{item.name}</h2>
                </div>
                <div className="flex justify-between items-center">
                  <p>{item.category}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default InventoryList;
