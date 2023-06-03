function Card(props) {

  const {nombre, apellido, musica, animal, libro, auto, personaje} = props
  return (
    <div className='card'>
      <h1>Nombre:    {nombre}</h1>
      <h1>Apellido:  {apellido}</h1>
      <h2>Música:    {musica}</h2>
      <h2>Animal:    {animal}</h2>
      <h2>Libro:     {libro}</h2>
      <h2>Auto:      {auto}</h2>
      <h2>Personaje: {personaje}</h2>
    </div>
  )
}

export default Card;
