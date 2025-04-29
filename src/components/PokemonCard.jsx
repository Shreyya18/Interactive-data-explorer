const PokemonCard = ({ name, sprite, types, id }) => {
    return (
      <div>
        <img src={sprite} alt={name} />
        <h3>{name}</h3>
        <p>ID: {id}</p>
        <p>Type: {types.join(', ')}</p>
      </div>
    );
  };
  
  export default PokemonCard;