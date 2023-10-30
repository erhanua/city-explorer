function CityExplorer({ setSearch, getLocation }) {
  return (
    <div>
      <h1>City Explorer</h1>
      <form onSubmit={getLocation}>
        <input
          type="text"
          placeholder="Enter a location"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Explore</button>
      </form>
    </div>
  );
}
export default CityExplorer;
