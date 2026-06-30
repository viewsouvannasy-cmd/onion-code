import { useState } from "react";
export function DisplayMovie({
  movie,
  setIsBackground,
  setIsAnimation,
  setCurrentMovie,
}) {
  const [isFocus, setIsFocus] = useState(false);
  const urlPoster = `https://image.tmdb.org/t/p/original${movie.poster_path}`;

  function handleOverlay() {
    setIsAnimation("open");
    document.body.style.overflow = "hidden";
    setCurrentMovie({
      id: movie.id,
      url_poster: urlPoster,
      name: movie.title || movie.name,
      date_release: movie.release_date || movie.first_air_date,
    });
    setIsBackground(true);
    setIsFocus(false);
  }

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
          display: isFocus === true ? "flex" : "none",
        }}
      >
        <button
          onClick={handleOverlay}
          onMouseDown={(e) => {
            e.preventDefault();
          }}
        >
          Add to list
        </button>

        <button>Favorite</button>
      </div>
    </div>
  );
}
