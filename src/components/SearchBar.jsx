const SearchBar = ({ searchTerm, onSearchChange }) => {
    return (
        <div className="  flex justify-center">
      <input className=" p-1.5 border-2 w-3/4 max-w-md rounded-md"
        type="text"
        placeholder="Search Pokémon..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      </div>
    );
  };
  
  export default SearchBar;