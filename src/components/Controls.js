import '../styles/Controls.css';

export default function Controls({ query, setQuery, setLoading, order, setOrder }) {
  return (
    <div>
      <input
        className="queryClass"
        type="text"
        placeholder="search poke here"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <select className="orderClass" value={order} onChange={(e) => setOrder(e.target.value)}>
        <option value="asc">Sort A - Z</option>
        <option value="desc">Sort Z - A</option>
      </select>
      <button className="searchButtonClass" onClick={() => setLoading(true)}>
        Search
      </button>
    </div>
  );
}
