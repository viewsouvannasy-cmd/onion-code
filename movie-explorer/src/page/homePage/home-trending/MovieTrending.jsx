import { useState, useEffect } from "react";
import axios from "axios";

export function MovieTrending({ movie, index, containmentState }) {
  const [genreMovie, setGenreMovie] = useState([]);

  useEffect(() => {
    const fetchGenre = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movie.id}?api_key=cb8d9a517e7387524c6cd936f1752bc0${containmentState.detail}`,
      );
      setGenreMovie(
        response.data.genres.length === 0 ? "" : response.data.genres[0].name,
      );
    };
    fetchGenre();
  }, [containmentState, movie]);

  const urlPoster = `https://image.tmdb.org/t/p/original${movie.poster_path}`;
  const year = movie.first_air_date || movie.release_date;

  return (
    <div className="movie-trending">
      <h2>{index + 1}</h2>
      <img src={urlPoster} />
      <div className="container-vote">
        <div>
          <p>{movie.title || movie.name}</p>
        </div>
        <span>
          {genreMovie} &#183; {year.slice(0, 4)}
        </span>
        <span>{movie.vote_average.toFixed(1)}</span>
        <div className="line-score">
          <div
            className="line-score-rate"
            style={{
              width: `${movie.vote_average.toFixed(1).replace(".", "")}%`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
