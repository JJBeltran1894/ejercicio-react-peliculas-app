import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function Pelicula({ titulo }) {
  const [esFavorita, setEsFavorita] = useState(false);
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10 px",
        margin: "5px",
        cursor: "pointer",
        backgroundColor: esFavorita ? "#fffef2" : "transparent",
        fontWeight: esFavorita ? "bold" : "normal",
      }}
      onClick={() => setEsFavorita(!esFavorita)}
    >
      <p>
        {titulo}
        {esFavorita ? "⭐" : ""}
      </p>
    </div>
  );
}

function App() {
  const listaPeliculas = [
    "El señor de los Anillos",
    "Matrix",
    "Interestelar",
    "Volver al Futuro",
  ];
  return (
    <div>
      <h1>Mis Películas Favoritas</h1>
      {listaPeliculas.map((pelicula, indice) => (
        <Pelicula key={indice} titulo={pelicula} />
      ))}
    </div>
  );
}

export default App;
