import { DetailForMovie } from "./DetailForMovie";
import { DetailForTv } from "./DetailForTv";
import "./DetailSection.css";

export function DetailSection({ detailMovie, currentMovie }) {
  return (
    <div className="container-detail-section-main">
      <div className="container-detail-header">
        <h3>{currentMovie.media_type === "movie" ? "Details" : "EPISODES"}</h3>
        <div></div>
      </div>
      {currentMovie.media_type === "movie" ? (
        <DetailForMovie detailMovie={detailMovie} currentMovie={currentMovie} />
      ) : (
        <DetailForTv detailMovie={detailMovie} currentMovie={currentMovie} />
      )}
    </div>
  );
}
