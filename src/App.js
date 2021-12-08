import { useEffect, useState } from 'react';

import './App.css';

function App() {
  //state
  const [pokemonList, setPokemonList] = useState([]);

  //useEffect hook
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex');
      const data = await response.json();
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
