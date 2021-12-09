import '../styles/PokeCard.css';
import giphy from '../giphy.gif';

export default function PokeCard({ pokemon }) {
  return (
    <div className="pokeList">
      {pokemon.map((poke) => (
        <div key={poke.id} className="pokeCard">
          <p className="pokeName">name: {poke.pokemon}</p>
          <img src={poke.url_image} style={{ backgroundImage: `url(${giphy})` }} />
          <p>type: {poke.type_1}</p>
          <p>ability: {poke.ability_1}</p>
          <p>pokebase: {poke.pokebase}</p>
        </div>
      ))}
    </div>
  );
}
