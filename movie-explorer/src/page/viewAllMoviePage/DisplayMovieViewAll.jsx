export function DisplayMovieViewAll({ movie, isLoading }) {
  const urlPoster = `https://image.tmdb.org/t/p/original${movie.poster_path}`;
  const year =
    movie?.release_date?.slice(0, 4) || movie?.first_air_date?.slice(0, 4);
  const average = movie?.vote_average?.toFixed(1);
  return (
    <div className="item-view-all-movie">
      <div
        className={`background-image-item-view-all ${isLoading && "loading"}`}
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
    </div>
  );
}
