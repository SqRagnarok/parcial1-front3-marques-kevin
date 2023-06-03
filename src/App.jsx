import "./App.css";
import Card from "./components/Card";
import Form from "./components/Form";
import { useState } from "react";

function App() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [musica, setMusica] = useState("");
  const [animal, setAnimal] = useState("");
  const [libro, setLibro] = useState("");
  const [auto, setAuto] = useState("");
  const [personaje, setPersonaje] = useState("");
  const [error, setError] = useState("");

  const onChangeNombre = (e) => {
    setNombre(e.target.value);
  };
  const onChangeApellido = (e) => {
    setApellido(e.target.value);
  };
  const onChangeMusica = (e) => {
    setMusica(e.target.value);
  };
  const onChangeAnimal = (e) => {
    setAnimal(e.target.value);
  };
  const onChangeLibro = (e) => {
    setLibro(e.target.value);
  };
  const onChangeAuto = (e) => {
    setAuto(e.target.value);
  };
  const onChangePersonaje = (e) => {
    setPersonaje(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre.length < 3) {
      setError("Por favor chequea que la información sea correcta, debes insertar al menos 3 caracteres para tu nombre.");
    } else if (!/^\S/.test(nombre)) {
      setError("Por favor chequea que la información sea correcta, no debes insertar espacios iniciales para tu nombre.");
    } else if (apellido.length < 6) {
      setError("Por favor chequea que la información sea correcta, debes insertar al menos 6 caracteres para tu apellido.");
    } else if (musica === "") {
      setError("Por favor chequea que la información sea correcta, debes insertar tu banda favorita.");
    } else if (musica === "Justin Bieber") {
      setError("Eso no es música.");
    } else if (animal === "") {
      setError("Por favor chequea que la información sea correcta, debes insertar tu animal favorito.");
    } else if (libro === "") {
      setError("Por favor chequea que la información sea correcta, debes insertar tu libro favorito.");
    } else if (auto === "") {
      setError("Por favor chequea que la información sea correcta, debes insertar tu auto favorito.");
    } else if (personaje === "") {
      setError("Por favor chequea que la información sea correcta, debes insertar tu personaje favorito.");
    } else {
      setError("¡Bienvenido!");
    }

  };

  return (
    <>
      <h1>Bienvenido. Cuéntanos sobre ti:</h1>
      <Form
        handleSubmit={handleSubmit}
        nombre={nombre}
        apellido={apellido}
        musica={musica}
        animal={animal}
        libro={libro}
        auto={auto}
        personaje={personaje}
        onChangeNombre={onChangeNombre}
        onChangeApellido={onChangeApellido}
        onChangeMusica={onChangeMusica}
        onChangeAnimal={onChangeAnimal}
        onChangeLibro={onChangeLibro}
        onChangeAuto={onChangeAuto}
        onChangePersonaje={onChangePersonaje}
        error={error}
      />
      {error === "¡Bienvenido!" ? (
        <Card
          nombre={nombre}
          apellido={apellido}
          musica={musica}
          animal={animal}
          libro={libro}
          auto={auto}
          personaje={personaje}
        />
      ) : undefined}
    </>
  );
}

export default App;