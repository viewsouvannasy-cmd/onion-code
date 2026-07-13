import { useState } from "react";
import { useNavigate } from "react-router";
import { getInfoMovie } from "../../utils/getInfoMovie";

export function DisplayMovieViewAll({
  movie,
  isLoading,
  setIsBackground,
  setIsAnimation,
  setCurrentMovie,
}) {
  const navigate = useNavigate();
  const [isFocus, setIsFocus] = useState(false);

  const urlPoster = `https://image.tmdb.org/t/p/original${movie.poster_path}`;
  const year =
    movie?.release_date?.slice(0, 4) || movie?.first_air_date?.slice(0, 4);
  const average = movie?.vote_average?.toFixed(1);

  function handleAddToList() {
    document.body.style.overflow = "hidden";
    setCurrentMovie(getInfoMovie(movie, urlPoster, movie.media_type));
    setIsBackground(true);
    setIsAnimation("open");
  }
  function handleToOwnPage() {
    navigate(`/${movie.media_type}/${movie.id}`);
    window.scroll({ top: 0 });
  }

  return (
    <div className="item-view-all-movie-main">
      <div
        className={`background-image-item-view-all ${isLoading && "loading"}`}
        role="button"
        onClick={handleToOwnPage}
      >
        {!isLoading && <img src={urlPoster} />}
      </div>
      <div>
        <p className={`item-name-view-all ${isLoading && "loading"}`}>
          {movie.name || movie.title}
        </p>
        <div className="item-movie-year-and-rate">
          <span className={`item-year-view-all ${isLoading && "loading"}`}>
            {year}
          </span>
          <span className={`item-rate-view-all ${isLoading && "loading"}`}>
            {average}
          </span>
        </div>
      </div>

      <button
        className="list-option-icon"
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        style={{ display: isLoading && "none" }}
      >
        <img src="/image/icon/dots.png" />
      </button>
      <div
        className="container-list-view-all"
        style={{
          display: isFocus === true ? "flex" : "none",
        }}
      >
        <button
          onClick={handleAddToList}
          onMouseDown={(e) => e.preventDefault()}
        >
          Add to list
        </button>

        <button>Favorite</button>
      </div>
    </div>
  );
}
