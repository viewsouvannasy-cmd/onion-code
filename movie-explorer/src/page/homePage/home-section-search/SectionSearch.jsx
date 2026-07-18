import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import "./SectionSearch.css";
import { api } from "../../../main";

export function SectionSearch({ containmentState }) {
  const [backdrop, setBackdrop] = useState(null);
  const [genresMovie, setGenresMovie] = useState([]);

  const navigate = useNavigate();

  // this state use for searching
  const [inputQuery, setInputQuery] = useState("");

  function handleSearch(value) {
    if (value) {
      navigate(`/search/movie/1?query=${encodeURIComponent(value)}`);
      return;
    }
    navigate(`/search/movie/1?query=${encodeURIComponent(inputQuery)}`);
    setInputQuery("");
  }

  function handleInputSearch(e) {
    if (e.key === "Enter") {
      handleSearch();
    }
  }

  useEffect(() => {
    const loadBackdrop = async () => {
      let response = await axios.get(
        `https://api.themoviedb.org/3/${containmentState.genrePath}?api_key=${api}${containmentState.detail}`,
      );

      const imageArray = response.data.results
        .filter((movie) => movie.backdrop_path !== null)
        .map(
          (movie) =>
            `https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
        );
      const randomBackdrop = Math.floor(Math.random() * imageArray.length) + 0;

      setBackdrop(imageArray[randomBackdrop]);

      response = await axios.get(
        `https://api.themoviedb.org/3/genre/${containmentState.media_type || "movie"}/list?api_key=${api}`,
      );

      setGenresMovie(response.data.genres.slice(0, 15));
    };

    loadBackdrop();
  }, [containmentState]);

  return (
    <div className="container-search-section">
      <img src={backdrop} />
      <div className="background-layer">
        <div className="container-search">
          <div>
            <h1>Million of Movie,</h1>
            <h2>series, anime, cartoon</h2>
          </div>
          <div className="input-search">
            <input
              placeholder="Search for movie, series, anime..."
              onChange={(e) => setInputQuery(e.target.value)}
              onKeyDown={handleInputSearch}
              value={inputQuery}
            />
            <button onClick={handleSearch}>Search</button>
          </div>
          <div className="container-option-genre">
            {genresMovie.map((genre) => {
              return (
                <button
                  key={genre.id}
                  className="option-genre-btn"
                  onClick={() => handleSearch(genre.name)}
                >
                  {genre.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
