export async function getPokemon(query, order) {
  const params = new URLSearchParams();
  params.set('pokemon', query);
  params.set('sort', 'asc');
  params.set('direction', order);
  const response = await fetch(
    `https://pokedex-alchemy.herokuapp.com/api/pokedex?${params.toString()}`
  );
  const data = await response.json();
  return data;
}
