import { useState } from "react";
import "./App.css";

function App() {
  // const [nilai, setNilai] = useState(0);
  const [inputNama, setInputNama] = useState("");
  const [inputNim, setInputNim] = useState("");

  // function handleClick() {
  //   setNilai(nilai + 1);
  // }

  function handleChangeNama() {
    setInputNama(event.target.value);
  }
  function handleChangeNim() {
    setInputNama(event.target.value);
  }

  return (
    <>
      {/* <h1>Hitung {nilai}</h1>
      <button onClick={handleClick}>klik</button> */}
      <form action="">
        <input type="text" value={inputNama} onChange={handleChangeNama} />
        <input type="text" value={inputNim} onChange={handleChangeNim} />
        <button type="submit" onClick={handleClick}></button>
      </form>
    </>
  );
}

export default App;
