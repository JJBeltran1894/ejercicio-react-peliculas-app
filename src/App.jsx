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
  const [peliculas, setPeliculas] = useState([
    "El señor de los Anillos",
    "Matrix",
    "Interestelar",
    "Volver al Futuro",
  ]);
  const [nuevaPelicula, setNuevaPelicula] = useState("");

  function agregarPelicula() {
    if (nuevaPelicula.trim() === "") {
      return;
    }
    setPeliculas([...peliculas, nuevaPelicula]);
    setNuevaPelicula("");
  }
  return (
    <div>
      <h1>Mis Películas Favoritas</h1>
      <div>
        <input
          type="text"
          value={nuevaPelicula}
          onChange={(e) => setNuevaPelicula(e.target.value)}
          placeholder="Escribe una pelicula..."
          style={{ padding: "8px", marginRight: "10 px" }}
        />
        <button onClick={agregarPelicula} style={{ padding: "8px" }}>
          Agregar Pelicula
        </button>
      </div>
      {peliculas.map((pelicula, indice) => (
        <Pelicula key={indice} titulo={pelicula} />
      ))}
    </div>
  );
}

export default App;
