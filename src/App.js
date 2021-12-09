import { useEffect, useState } from 'react';
import { getPokemon, getTypes } from './services/pokemon';

import PokeCard from './components/PokeCard';
import Controls from './components/Controls';

import './App.css';

function App() {
  //state
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [order, setOrder] = useState('asc');
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('all');

  //useEffect hook for loading pokemon
  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemon(query, order, selectedType);
      // console.log(data);
      setPokemonList(data.results);
      setLoading(false);
    };
    if (loading) {
      fetchData();
    }
  }, [loading, query, order, selectedType]);

  //useEffect hook for getting types
  useEffect(() => {
    const fetchData = async () => {
      const data = await getTypes();
      setTypes(data);
    };
    fetchData();
  }, []);

  //rendering page
  return (
    <div className="App">
      <h1> Welcome to Pokemon </h1>
      {loading && <p>Loading...</p>}
      {!loading && (
        <>
          <Controls
            query={query}
            setQuery={setQuery}
            setLoading={setLoading}
            order={order}
            setOrder={setOrder}
            types={types}
            selectedType={selectedType}
            setSelectedType={setSelectedType}
          />
          <PokeCard pokemon={pokemonList} />
        </>
      )}
    </div>
  );
}

export default App;
