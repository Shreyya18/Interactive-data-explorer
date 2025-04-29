const FilterDropdown = ({ types, selectedType, onTypeChange }) => {
    return (
      <select value={selectedType} onChange={(e) => onTypeChange(e.target.value)}>
        <option value="">All Types</option>
        {types.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    );
  };
  
  export default FilterDropdown;