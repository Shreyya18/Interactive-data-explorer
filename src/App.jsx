import { useState, useEffect } from 'react';
import PokemonCard from './components/PokemonCard';
import SearchBar from './components/SearchBar';
import FilterDropdown from './components/FilterDropdown';

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [typesList, setTypesList] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
        if (!response.ok) throw new Error('Failed to fetch data');
        const data = await response.json();

        // Map additional data for each Pokémon
        const detailedPokemon = await Promise.all(
          data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            const details = await res.json();
            return {
              name: details.name,
              sprite: details.sprites.front_default,
              types: details.types.map((type) => type.type.name),
              id: details.id,
            };
          })
        );

        setPokemonList(detailedPokemon);
        setFilteredPokemon(detailedPokemon); // Default to all Pokémon
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    const fetchTypes = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/type/');
        if (!response.ok) throw new Error('Failed to fetch types');
        const data = await response.json();
        setTypesList(data.results.map((type) => type.name));
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchPokemon();
    fetchTypes();
  }, []);

  const handleSearchChange = (term) => {
    setSearchTerm(term);
    filterPokemon(term, selectedType);
  };

  const handleTypeChange = (type) => {
    setSelectedType(type);
    filterPokemon(searchTerm, type);
  };

  const filterPokemon = (term, type) => {
    let filtered = pokemonList;

    if (term) {
      filtered = filtered.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(term.toLowerCase())
      );
    }

    if (type) {
      filtered = filtered.filter((pokemon) =>
        pokemon.types.includes(type.toLowerCase())
      );
    }

    setFilteredPokemon(filtered);
  };

  return (
    <div className="min-h-screen bg-blue-50 text-gray-800 ">
      <h1 className="text-4xl font-bold text-center text-orange-500 my-8">Interactive Pokémon Explorer</h1>

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {!loading && !error && (
        <>
          <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
          <FilterDropdown types={typesList} selectedType={selectedType} onTypeChange={handleTypeChange} />
          <div className='flex justify-center'>
          <div className="grid     grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 p-4">
            {filteredPokemon.length > 0 ? (
              filteredPokemon.map((pokemon) => (
                <PokemonCard
                  key={pokemon.id}
                  name={pokemon.name}
                  sprite={pokemon.sprite}
                  types={pokemon.types}
                  id={pokemon.id}
                />
              ))
            ) : (
              <p className="text-center col-span-full">No Pokémon match your search.</p>
            )}
          </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;