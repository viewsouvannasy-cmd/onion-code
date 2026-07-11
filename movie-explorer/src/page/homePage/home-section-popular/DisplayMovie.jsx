import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { getInfoMovie } from "../../../utils/getInfoMovie";

export function DisplayMovie({
  movie,
  setIsBackground,
  setIsAnimation,
  setCurrentMovie,
  containmentState,
}) {
  const navigate = useNavigate();
  const [isFocus, setIsFocus] = useState(false);
  const [addDetail, setAddDetail] = useState([]);
  const urlPoster = `https://image.tmdb.org/t/p/original${movie.poster_path}`;

  function handleOverlay() {
    setIsAnimation("open");
    document.body.style.overflow = "hidden";
    setCurrentMovie(getInfoMovie(movie, urlPoster));

    setIsBackground(true);
    setIsFocus(false);
  }

  console.log(movie);

  function handleToOwnPage() {
    navigate(
      `/${movie.media_type || containmentState.media_type}/${movie.id}`,
      { state: movie },
    );
  }

  return (
    <div className="container-movie" role="button" onClick={handleToOwnPage}>
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
