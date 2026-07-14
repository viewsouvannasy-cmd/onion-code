import { formatMoney } from "../../../utils/formatMoney";
import "./OverViewSection.css";

export function OverViewSection({ detailMovie, mediaType }) {
  const studio = detailMovie?.production_companies?.[0]?.name || "";
  const director =
    detailMovie?.credits?.crew?.find((proson) => proson.job === "Director") ||
    "";
  const language = detailMovie?.spoken_languages?.[0]?.english_name;
  const budget = formatMoney(detailMovie?.budget || "");

  //this section for tv
  const episodeLength = detailMovie?.episode_run_time?.[0] || "";
  const creator = detailMovie?.credits?.crew?.find(
    (person) => person.department === "Writing",
  )?.name;

  return (
    <div className="container-over-view-section-main">
      <div className="container-over-view-header">
        <h3>OVERVIEW</h3>
        <div></div>
      </div>
      <div className="container-over-view-detail">
        <div>{detailMovie.overview}</div>
        <div>
          <div className="box-detail">
            <span>{mediaType === "movie" ? "DIRECTOR" : "CREATOR"}</span>
            <span>{mediaType === "movie" ? director.name : creator}</span>
          </div>
          <div className="box-detail">
            <span>{mediaType === "movie" ? "STUDIO" : "NETWORK"}</span>
            <span>{studio}</span>
          </div>
          <div className="box-detail">
            <span>LANGUAGE</span>
            <span>{language}</span>
          </div>
          <div className="box-detail">
            <span>{mediaType === "movie" ? "BUDGET" : "EPISODE LENGTH"}</span>
            <span>
              {mediaType === "movie" ? `${budget}$` : `~${episodeLength} min`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
