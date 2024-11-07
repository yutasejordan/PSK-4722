import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AddItem from "./pages/AddItem";
import { useState } from "react";
import InventoryList from "./pages/InventoryList";

function App() {
  const [items, setItems] = useState([]);

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  const handleDeleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleToggleItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

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
              element={
                <InventoryList
                  items={items}
                  onDeleteItem={handleDeleteItem}
                  onToggleItem={handleToggleItem}
                />
              }
            />
            <Route
              path="/additem"
              element={<AddItem onAddItem={handleAddItem} />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
