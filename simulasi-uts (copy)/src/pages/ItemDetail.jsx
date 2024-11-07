import { useParams } from "react-router-dom";

const ItemDetail = ({ items }) => {
  let { id } = useParams();
  const item = items.find((item) => item.id === parseInt(id));

  return (
    <div className="flex flex-wrap gap-4 h-[80vh]">
      <section className="bg-white w-96 p-5 m-auto rounded-lg shadow-lg">
        <h2 className="font-bold text-2xl mb-3 text-center">{item.name}</h2>
        <p className="font-medium mb-1.5">Kategori: {item.category}</p>
        <p className="font-medium mb-1.5">Stok: {item.stock}</p>
        <p className="font-medium mb-1.5">Harga: {item.price}</p>
      </section>
    </div>
  );
};

export default ItemDetail;
