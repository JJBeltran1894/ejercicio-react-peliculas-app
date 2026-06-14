import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function Pelicula({ titulo }) {
  const [esFavorita, setEsFavorita] = useState(false);
  return (
    <div
      className={`tarjeta-pelicula ${esFavorita ? "favorita" : ""}`}
      onClick={() => setEsFavorita(!esFavorita)}
    >
      <span style={{ fontWeight: esFavorita ? "bold" : "normal" }}>
        {titulo}
        {esFavorita ? "⭐" : "🎬"}
      </span>
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
    <div className="contenedor-principal">
      <h1 className="titulo">Cartelera Favorita</h1>
      <div className="controles">
        <input
          type="text"
          className="input-pelicula"
          value={nuevaPelicula}
          onChange={(e) => setNuevaPelicula(e.target.value)}
          placeholder="Escribe una pelicula..."
          style={{ padding: "8px", marginRight: "10 px" }}
        />
        <button className="btn-agregar" onClick={agregarPelicula}>
          Agregar Película
        </button>
      </div>
      {peliculas.map((pelicula, indice) => (
        <Pelicula key={indice} titulo={pelicula} />
      ))}
    </div>
  );
}

export default App;
