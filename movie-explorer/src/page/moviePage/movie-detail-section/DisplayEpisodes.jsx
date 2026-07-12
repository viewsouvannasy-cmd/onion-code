export function DisplayEpisodes({ episode, index, isLoading }) {
  const stillPath = `https://image.tmdb.org/t/p/original${episode.still_path}`;
  return (
    <div className="episode-item">
      <div>
        <p>{index + 1}</p>
        <div className={`box-image-episode ${isLoading && "loading"}`}>
          {!isLoading && <img src={stillPath} loading="lazy" />}
        </div>
        <div className="box-title-of-episode">
          <p>{episode.name}</p>
          <span>{episode.overview}</span>
        </div>
      </div>
      <div>{episode.runtime}m</div>
    </div>
  );
}
