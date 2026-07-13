import { useState } from "react";

import { useNavigate } from "react-router";
import { getInfoMovie } from "../../../utils/getInfoMovie";

export function DisplayMovie({
  movie,
  setIsBackground,
  setIsAnimation,
  setCurrentMovie,
  containmentState,
  isLoading,
}) {
  const navigate = useNavigate();
  const [isFocus, setIsFocus] = useState(false);

  const urlPoster = `https://image.tmdb.org/t/p/original${movie.poster_path}`;

  function handleOverlay(e) {
    e.stopPropagation();

    setIsAnimation("open");
    document.body.style.overflow = "hidden";
    setCurrentMovie(
      getInfoMovie(
        movie,
        urlPoster,
        `${movie.media_type || containmentState.media_type}`,
      ),
    );

    setIsBackground(true);
    setIsFocus(false);
  }

  function handleToOwnPage() {
    navigate(`/${movie.media_type || containmentState.media_type}/${movie.id}`);
    window.scroll({ top: 0 });
  }

  return (
    <div className="container-movie-main" role="button">
      <div className="container-movie" onClick={handleToOwnPage}>
        <div
          className={`backdrop-image-container-movie ${isLoading && "loading"}`}
        >
          {!isLoading && <img src={urlPoster} />}
        </div>
        <div className="container-movie-detail">
          <p>{movie.title || movie.name}</p>
          <span>{movie.release_date || movie.first_air_date}</span>
        </div>
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
