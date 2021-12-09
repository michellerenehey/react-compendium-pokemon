import { useEffect, useState } from 'react';
import { getPokemon, getTypes } from './services/pokemon';

import PokeCard from './components/PokeCard';
import Controls from './components/Controls';

import Button from '@mui/material/Button';

import './App.css';

function App() {
  //state
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [order, setOrder] = useState('asc');
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  //useEffect hook for loading pokemon
  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemon(query, order, selectedType, currentPage);
      console.log(data);
      setPokemonList(data.results);
      setLoading(false);
    };
    if (loading) {
      fetchData();
    }
  }, [loading, query, order, selectedType, currentPage]);

  //useEffect hook for getting types
  useEffect(() => {
    const fetchData = async () => {
      const data = await getTypes();
      setTypes(data);
    };
    fetchData();
  }, []);

  //pagination functions
  function handleNextPage() {
    setCurrentPage((prevState) => ++prevState);
    setLoading(true);
  }

  function handlePrevPage() {
    setCurrentPage((prevState) => --prevState);
    setLoading(true);
  }

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
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
          <PokeCard pokemon={pokemonList} />
          <div className="pagination">
            <p className="currentPage">Current Page: {currentPage}</p>
            <Button variant="outlined" color="success" onClick={handleNextPage}>
              Next Page
            </Button>
            <Button variant="outlined" color="success" onClick={handlePrevPage}>
              Previous Page
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
