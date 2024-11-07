const ItemDetail = ({ items }) => {
  return (
    <div className="flex flex-wrap gap-4">
      {items.map((item) => (
        <section
          className={
            item.checked
              ? "bg-white w-72 p-5 h-max rounded-lg shadow-lg"
              : "hidden"
          }
        >
          <h2 className="font-bold text-xl mb-2">{item.name}</h2>
          <p className="font-medium mb-1.5">Kategori: {item.category}</p>
          <p className="font-medium mb-1.5">Stok: {item.stock}</p>
          <p className="font-medium mb-1.5">Harga: {item.price}</p>
        </section>
      ))}
    </div>
  );
};

export default ItemDetail;
