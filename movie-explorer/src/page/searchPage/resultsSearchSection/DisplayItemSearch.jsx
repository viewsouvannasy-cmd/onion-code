import { useNavigate } from "react-router";

export function DisplayItemSearch({ item, isLoading, type }) {
  const navigate = useNavigate();

  const urlPoster = `https://image.tmdb.org/t/p/original${item?.poster_path}`;
  const year =
    item?.release_date?.slice(0, 4) || item?.first_air_date?.slice(0, 4);
  const average =
    item?.vote_average?.toFixed(1) || item?.vote_average?.toFixed(1);

  function handleToOwnPage() {
    navigate(`/${type}/${item.id}`);
    window.scroll({ top: 0 });
  }

  return (
    <div className="item-result-search" role="button" onClick={handleToOwnPage}>
      <div className={`backdrop-image-item-search ${isLoading && "loading"}`}>
        <img src={urlPoster} loading="lazy" />
      </div>
      <div>
        <p className={`item-name-view-all ${isLoading && "loading"}`}>
          {item.title || item.name}
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
