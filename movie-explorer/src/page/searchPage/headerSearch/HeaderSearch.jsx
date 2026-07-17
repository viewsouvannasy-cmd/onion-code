import { useNavigate } from "react-router";
import { useState } from "react";
import "./HeaderSearch.css";

export function HeaderSearch({
  resultsMovie,
  resultsTv,
  queryValue,
  setIsLoading,
  type,
}) {
  const navigate = useNavigate();
  const [inputQuery, setInputQuert] = useState(queryValue);

  function handleSelect(mediaType) {
    setIsLoading(true);
    navigate(`/search/${mediaType}/1?query=${queryValue}`);
  }

  function handleSearch() {
    if (inputQuery === queryValue) {
      return;
    }

    setIsLoading(true);
    navigate(`/search/${type}/1?query=${inputQuery}`);
  }

  function handleInputSearch(e) {
    if (e.key === "Enter") {
      handleSearch();
    }
  }

  return (
    <div className="container-search-main-page">
      <div className="container-header-search-page">
        <div>
          <input
            placeholder="Search for movie, series, anime..."
            value={inputQuery}
            onChange={(e) => setInputQuert(e.target.value)}
            onKeyDown={handleInputSearch}
          />
          <button onClick={handleSearch}>
            <img src="/image/icon/search.png" />
          </button>
        </div>
        <div>
          <p>Results Search</p>
          <div className="container-total-movie-and-tv">
            <div
              className="total-movie"
              role="button"
              onClick={() => handleSelect("tv")}
              style={{
                borderBottom: type === "tv" && "2px solid white",
              }}
            >
              <p>Tv Shows:</p> <span>{resultsTv.total_results}</span>
            </div>
            <div
              className="total-tv"
              role="button"
              onClick={() => handleSelect("movie")}
              style={{
                borderBottom: type === "movie" && "2px solid white",
              }}
            >
              <p>Movies:</p> <span>{resultsMovie.total_results}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
