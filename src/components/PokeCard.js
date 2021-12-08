import '../styles/PokeCard.css';

export default function PokeCard({ pokemon }) {
  return (
    <div className="pokeList">
      {pokemon.map((poke) => (
        <div key={poke.id} className="pokeCard">
          <p className="pokeName">name: {poke.pokemon}</p>
          <img src={poke.url_image} />
          <p>type 1: {poke.type_1}</p>
          <p>type 2: {poke.type_2}</p>
          <p>ability: {poke.ability_1}</p>
        </div>
      ))}
    </div>
  );
}
