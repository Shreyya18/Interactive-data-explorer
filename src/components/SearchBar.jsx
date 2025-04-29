const SearchBar = ({ searchTerm, onSearchChange }) => {
    return (
      <input
        type="text"
        placeholder="Search Pokémon..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    );
  };
  
  export default SearchBar;