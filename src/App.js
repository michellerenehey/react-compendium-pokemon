import { useEffect, useState } from 'react';
import { getPokemon } from './services/pokemon';

import PokeCard from './components/PokeCard';

import './App.css';

function App() {
  //state
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);

  //useEffect hook
  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemon();
      console.log(data);
      setPokemonList(data.results);
      setLoading(false);
    };
    fetchData();
  }, []);

  //rendering page
  return (
    <div className="App">
      <h1> Welcome to Pokemon </h1>
      {loading && <p>Loading...</p>}
      {!loading && <PokeCard pokemon={pokemonList} />}
    </div>
  );
}

export default App;
