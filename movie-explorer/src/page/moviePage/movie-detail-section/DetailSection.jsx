import { DetailForMovie } from "./DetailForMovie";
import { DetailForTv } from "./DetailForTv";
import "./DetailSection.css";

export function DetailSection({ detailMovie, mediaType }) {
  return (
    <div className="container-detail-section-main">
      <div className="container-detail-header">
        <h3>{mediaType === "movie" ? "Details" : "EPISODES"}</h3>
        <div></div>
      </div>
      {mediaType === "movie" ? (
        <DetailForMovie detailMovie={detailMovie} mediaType={mediaType} />
      ) : (
        <DetailForTv detailMovie={detailMovie} mediaType={mediaType} />
      )}
    </div>
  );
}
