import { calculateTime } from "../../../utils/calculateTime";
import { getInfoMovie } from "../../../utils/getInfoMovie";

import "./TitleSection.css";

export function TitleSection({
  detailMovie,
  mediaType,
  setIsBackground,
  setIsAnimation,
  setCurrentMovie,
  setIsOverlayTrailer,
  setIsAnimationTrailer,
}) {
  const urlPoster = `https://image.tmdb.org/t/p/original${detailMovie.poster_path}`;
  const urlBackdrop = `https://image.tmdb.org/t/p/original${detailMovie.backdrop_path}`;
  const year =
    detailMovie?.release_date?.slice(0, 4) ||
    detailMovie?.first_air_date?.slice(0, 4);
  const runtime = calculateTime(detailMovie?.runtime);

  const name = detailMovie?.name || detailMovie?.title;

  //this is for tv
  const currentSeason = detailMovie?.number_of_seasons;
  const numberOfEpisode = detailMovie?.number_of_episodes;

  //this function for add to list
  function handleAddToList() {
    setIsAnimation("open");
    document.body.style.overflow = "hidden";
    setCurrentMovie(getInfoMovie(detailMovie, urlPoster));

    setIsBackground(true);
  }

  //this function for play trailer
  function handlePlayTrailer() {
    setIsAnimationTrailer("open");
    document.body.style.overflow = "hidden";
    setIsOverlayTrailer(true);
  }

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
            <h1>{name}</h1>
            <span>
              {mediaType === "movie"
                ? `${year} \u00B7 ${runtime}`
                : `${year} \u00B7 ${currentSeason} seasons \u00B7 ${numberOfEpisode} episodes`}
            </span>
            <div className="box-genre-of-movie">
              {detailMovie?.genres?.map((genre) => {
                return <button key={genre.id}>{genre.name}</button>;
              })}
            </div>
            <div className="box-btn-my-list-and-play-trailer">
              <button onClick={handleAddToList}>+My list</button>
              <button onClick={handlePlayTrailer}>Play trailer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
