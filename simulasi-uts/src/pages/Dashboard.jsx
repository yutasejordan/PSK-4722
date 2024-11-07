const Dashboard = ({ items }) => {
  return (
    <>
      <section className="p-10 flex flex-col items-center bg-white mt-12 w-[35rem] mx-auto rounded-lg shadow-lg">
        <div className="w-full">
          <h2 className="font-bold text-4xl mb-4 text-center">Dashboard</h2>
          <p className="font-semibold bg-slate-700 p-10 rounded-xl shadow-xl text-xl w-full text-white">
            Total stok barang
            <span className="font-semibold text-xl mt-2 block">
              {items.reduce((acc, currVal) => acc + currVal.stock, 0)}
            </span>
          </p>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
