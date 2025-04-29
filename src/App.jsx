const App = () => {
  return (
    <div className="min-h-screen bg-blue-50 text-gray-800">
      <h1 className="text-4xl font-bold text-center text-orange-500 my-8">
        Interactive Pokémon Explorer
      </h1>
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Search Pokémon..."
          className="border-2 border-orange-500 rounded-lg px-4 py-2 w-3/4 max-w-md"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {/* Example Pokémon Card */}
        <div className="border rounded-lg bg-white shadow-md p-4 text-center">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
            alt="Pikachu"
            className="w-24 h-24 mx-auto"
          />
          <h3 className="text-lg font-semibold mt-2">Pikachu</h3>
          <p className="text-sm text-gray-600">ID: 25</p>
          <p className="text-sm text-gray-600">Type: Electric</p>
        </div>
      </div>
    </div>
  );
};

export default App;