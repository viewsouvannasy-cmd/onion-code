import "./SectionSearch.css";
export function SectionSearch() {
  return (
    <div className="container-search-section">
      <div className="background-layer">
        <div className="container-search">
          <div>
            <h1>Million of Movie,</h1>
            <h2>series, anime, cartoon</h2>
          </div>
          <div className="input-search">
            <input placeholder="Search for movie, series, anime..." />
            <button>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}
