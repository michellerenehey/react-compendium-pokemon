import '../styles/Controls.css';

export default function Controls({ query, setQuery }) {
  return (
    <div>
      <input
        type="text"
        placeholder="search poke here"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
    </div>
  );
}
