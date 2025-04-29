const FilterDropdown = ({ types, selectedType, onTypeChange }) => {
    return (
    <div className="flex justify-center my-2 ">
      <select  className=" p-1 w-3xs border-2 rounded-2xl"value={selectedType} onChange={(e) => onTypeChange(e.target.value)}>
        <option value="">filter</option>
        {types.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      </div>
    );
  };
  
  export default FilterDropdown;