import '../styles/Controls.css';

export default function Controls({ query, setQuery, setLoading }) {
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
      <button onClick={() => setLoading(true)}>Search</button>
    </div>
  );
}
