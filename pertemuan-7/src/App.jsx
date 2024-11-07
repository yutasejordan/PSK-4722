import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./HomePage";
import About from "./About";
import Tes from "./Tes";
import Products from "./Products";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/product/beras">Product Beras</Link>
          </li>
          <li>
            <Link to="/product/pasir">Produk Pasir</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />}>
          <Route path="tes" element={<Tes />} />
        </Route>
        <Route path="/product/:id" element={<Products />} />
      </Routes>
    </Router>
  );
}

export default App;
