import React from "react";

function Form(props) {
  const {
    handleSubmit,
    nombre,
    apellido,
    musica,
    animal,
    libro,
    auto,
    personaje,
    onChangeNombre,
    onChangeApellido,
    onChangeMusica,
    onChangeAnimal,
    onChangeLibro,
    onChangeAuto,
    onChangePersonaje,
    error,
  } = props;

  return (
    <form onSubmit={handleSubmit} className='form'>
      <label>¿Cuál es tu nombre?</label>
      <input
        type="text"
        id="nombre"
        value={nombre}
        placeholder="Ej.: John"
        onChange={onChangeNombre}
      />
      <label>¿Cuál es tu Apellido?</label>
      <input
        type="text"
        id="apellido"
        value={apellido}
        placeholder="Ej.: Doe"
        onChange={onChangeApellido}
      />
      <label>¿Cuál es tu Banda Musical favorita?</label>
      <input
        type="text"
        id="musica"
        value={musica}
        placeholder="Ej.: Black Sabbath"
        onChange={onChangeMusica}
      />
      <label>¿Cuál es tu Animal favorito?</label>
      <input
        type="text"
        id="animal"
        value={animal}
        placeholder="Ej.: Panda Rojo"
        onChange={onChangeAnimal}
      />
      <label>¿Cuál es tu Libro favorito?</label>
      <input
        type="text"
        id="libro"
        value={libro}
        placeholder="Ej.: Watership Down"
        onChange={onChangeLibro}
      />
      <label>¿Cuál es tu Auto favorito?</label>
      <input
        type="text"
        id="auto"
        value={auto}
        placeholder="Ej.: Toyota Sprinter Trueno AE92"
        onChange={onChangeAuto}
      />
      <label>¿Cuál es tu Personaje favorito?</label>
      <input
        type="text"
        id="personaje"
        value={personaje}
        placeholder="Ej.: Arthas Menethil"
        onChange={onChangePersonaje}
      />
      <button>Completar encuesta</button>
      {error && <p>{error}</p>}
    </form>
  );
}

export default Form;