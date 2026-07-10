import { calculateTime } from "../../../utils/calculateTime";
import "./TitleSection.css";

export function TitleSection({ detailMovie }) {
  const urlPoster = `https://image.tmdb.org/t/p/original${detailMovie.poster_path}`;
  const urlBackdrop = `https://image.tmdb.org/t/p/original${detailMovie.backdrop_path}`;
  const year =
    detailMovie?.release_date?.slice(0, 4) ||
    detailMovie?.first_air_date?.slice(0, 4);
  const runtime = calculateTime(detailMovie?.runtime);

  return (
    <div className="container-title-section">
      <img className="backdrop-image-cover-title-section" src={urlBackdrop} />
      <div className="background-title-section"></div>
      <div className="container-info-movie-main">
        <div className="container-info-movie">
          <div>
            <img src={urlPoster} />
          </div>
          <div>
            <h1>{detailMovie.name || detailMovie.title}</h1>
            <span>
              {year} &#183; {runtime}
            </span>
            <div className="box-genre-of-movie">
              {detailMovie?.genres?.map((genre) => {
                return <button key={genre.id}>{genre.name}</button>;
              })}
            </div>
            <div className="box-btn-my-list-and-play-trailer">
              <button>+My list</button>
              <button>Play trailer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
