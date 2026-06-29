import { useState } from "react";
export function DisplayMovie({ movie, setIsBackground }) {
  const [isFocus, setIsFocus] = useState(false);
  const urlPoster = `https://image.tmdb.org/t/p/original${movie.poster_path}`;

  return (
    <div className="container-movie">
      <img src={urlPoster} />
      <div className="container-movie-detail">
        <p>{movie.title || movie.name}</p>
        <span>{movie.release_date || movie.first_air_date}</span>
      </div>
      <button
        className="list-icon"
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      >
        <img src="/image/icon/dots.png" />
      </button>
      <div
        className="container-list"
        style={{
          display: isFocus === true ? "initial" : "none",
        }}
      >
        <div>
          <button>Add to list</button>
        </div>
        <div>
          <button>Favorite</button>
        </div>
      </div>
    </div>
  );
}
