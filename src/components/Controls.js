import '../styles/Controls.css';
import Button from '@mui/material/Button';

export default function Controls({
  query,
  setQuery,
  setLoading,
  order,
  setOrder,
  types,
  selectedType,
  setSelectedType,
}) {
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
      <select
        className="typeClass"
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
      >
        <option value="all">all</option>
        {types.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      <Button variant="outlined" color="success" onClick={() => setLoading(true)}>
        Search
      </Button>
    </div>
  );
}
