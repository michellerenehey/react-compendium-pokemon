import '../styles/PokeCard.css';

export default function PokeCard({ pokemon }) {
  return (
    <div>
      {pokemon.map((poke) => (
        <div key={poke.id}>
          <p>name: {poke.pokemon}</p>
          <img src={poke.url_image} />
          <p>type 1: {poke.type_1}</p>
          <p>type 2: {poke.type_2}</p>
          <p>ability: {poke.ability_1}</p>
        </div>
      ))}
    </div>
  );
}
