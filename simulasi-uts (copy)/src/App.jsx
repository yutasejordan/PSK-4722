import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";
import InventoryList from "./pages/InventoryList";
import ItemDetail from "./pages/ItemDetail";

const barang = [
  {
    id: 1,
    name: "Gudang Garam Signature",
    category: "Rokok",
    stock: 20,
    price: 25000,
  },
  {
    id: 2,
    name: "Indomie Goreng",
    category: "Makanan",
    stock: 10,
    price: 4000,
  },
  {
    id: 3,
    name: "Gudang Garam Filter",
    category: "Rokok",
    stock: 30,
    price: 24500,
  },
  {
    id: 4,
    name: "Fruit Tea",
    category: "Minuman",
    stock: 40,
    price: 6000,
  },
];

function App() {
  const [items, setItems] = useState(barang);

  return (
    <Router>
      <div className="w-screen h-screen flex">
        <Sidebar />
        <main className="w-[82%] bg-slate-200 p-5">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard items={items} />} />
            <Route
              path="/inventorylist"
              element={<InventoryList items={items} />}
            />
            <Route
              path="/itemdetail/:id"
              element={<ItemDetail items={items} />}
            ></Route>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
