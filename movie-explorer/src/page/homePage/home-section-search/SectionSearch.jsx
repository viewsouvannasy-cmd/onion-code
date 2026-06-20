import { useState, useEffect } from "react";
import axios from "axios";
import "./SectionSearch.css";
export function SectionSearch({ url, urlImage }) {
  const [backdrop, setBackdrop] = useState([]);
  const [genresMovie, setGenresMovie] = useState([]);

  useEffect(() => {
    const loadBackdrop = async () => {
      let response = await axios.get(url);
      const imageArray = response.data.results
        .filter((movie) => movie.backdrop_path !== null)
        .map((movie) => `${urlImage}${movie.backdrop_path}`);
      const randomBackdrop = Math.floor(Math.random() * imageArray.length) + 0;
      setBackdrop(imageArray[randomBackdrop]);

      response = await axios.get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=cb8d9a517e7387524c6cd936f1752bc0`,
      );

      setGenresMovie(response.data.genres.slice(0, 16));
    };

    loadBackdrop();
  }, []);

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
            <input placeholder="Search for movie, series, anime..." />
            <button>Search</button>
          </div>
          <div className="container-option-genre">
            {genresMovie.map((genre) => {
              return (
                <button key={genre.id} className="option-genre-btn">
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
