import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function Pelicula({ titulo }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10 px", margin: "5px" }}>
      <p>{titulo}</p>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Mis Películas Favoritas</h1>
      <Pelicula titulo="El Señor de los Anillos" />
      <Pelicula titulo="Matrix" />
    </div>
  );
}

export default App;
