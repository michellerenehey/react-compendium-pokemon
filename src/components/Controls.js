import '../styles/Controls.css';

export default function Controls({ query, setQuery, setLoading, order, setOrder }) {
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
      <select value={order} onChange={(e) => setOrder(e.target.value)}>
        <option value="asc">A - Z</option>
        <option value="desc">Z - A</option>
      </select>
      <button onClick={() => setLoading(true)}>Search</button>
    </div>
  );
}
