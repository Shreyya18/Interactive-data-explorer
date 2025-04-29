const PokemonCard = ({ name, sprite, types, id }) => {
    return (
      <div className=" text-white bg-black border-2 p-1.5  flex flex-col justify-center items-center rounded-md">
        <h3 className=" bg-white text-black w-full flex justify-center">{name}</h3>
        <img src={sprite} alt={name} width="200"/>
        <p>Type: {types.join(', ')}</p>
        <p>ID: {id}</p>
      </div>
    );
  };
  
  export default PokemonCard;