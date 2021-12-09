import { useEffect, useState } from 'react';
import { getPokemon } from './services/pokemon';

import PokeCard from './components/PokeCard';
import Controls from './components/Controls';

import './App.css';

function App() {
  //state
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');

  //useEffect hook
  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemon(query);
      console.log(data);
      setPokemonList(data.results);
      setLoading(false);
    };
    if (loading) {
      fetchData();
    }
  }, [loading, query]);

  //rendering page
  return (
    <div className="App">
      <h1> Welcome to Pokemon </h1>
      {loading && <p>Loading...</p>}
      {!loading && (
        <>
          <Controls query={query} setQuery={setQuery} setLoading={setLoading} />
          <PokeCard pokemon={pokemonList} />
        </>
      )}
    </div>
  );
}

export default App;
