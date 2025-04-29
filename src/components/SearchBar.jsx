const SearchBar = ({ searchTerm, onSearchChange }) => {
    return (
        <div className="  flex justify-center">
      <input className="border-2 w-3/4 max-w-md"
        type="text"
        placeholder="Search Pokémon..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      </div>
    );
  };
  
  export default SearchBar;