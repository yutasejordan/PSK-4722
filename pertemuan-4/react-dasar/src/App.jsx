import Navbar from "./assets/components/Navbar";
import Form from "./assets/components/Form";
import Background from "./assets/components/Background";
import Footer from "./assets/components/Footer";

function App() {
  return (
    <div className="relative h-[145vh]">
      <Navbar />
      <Background />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
