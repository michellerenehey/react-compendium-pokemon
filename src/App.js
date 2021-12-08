import { useEffect, useState } from 'react';
import { getPokemon } from './services/pokemon';

import './App.css';

function App() {
  //state
  const [pokemonList, setPokemonList] = useState([]);

  //useEffect hook
  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemon();
      console.log(data);
      setPokemonList(data.results);
    };
    fetchData();
  }, []);

  //rendering page
  return (
    <div className="App">
      <h1> Welcome to Pokemon </h1>
      {pokemonList.map((item) => (
        <p key={item.id}>{item.pokemon}</p>
      ))}
    </div>
  );
}

export default App;
