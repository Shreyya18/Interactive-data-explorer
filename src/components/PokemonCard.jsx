const PokemonCard = ({ name, sprite, types, id }) => {
    return (
      <div className="border-2 p-1.5  flex flex-col justify-center items-center rounded-md">
        <img src={sprite} alt={name} width="200"/>
        <h3>{name}</h3>
        <p>ID: {id}</p>
        <p>Type: {types.join(', ')}</p>
      </div>
    );
  };
  
  export default PokemonCard;