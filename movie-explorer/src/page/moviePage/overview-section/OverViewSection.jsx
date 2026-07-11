import { formatMoney } from "../../../utils/formatMoney";
import "./OverViewSection.css";

export function OverViewSection({ detailMovie }) {
  const studio = detailMovie?.production_companies?.[0]?.name || "";
  const director =
    detailMovie?.credits?.crew?.find((proson) => proson.job === "Director") ||
    "";
  const language = detailMovie?.spoken_languages?.[0]?.name || "";

  const budget = formatMoney(detailMovie?.budget || "");

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
            <span>DIRECTOR</span>
            <span>{director.name}</span>
          </div>
          <div className="box-detail">
            <span>STUDIO</span>
            <span>{studio}</span>
          </div>
          <div className="box-detail">
            <span>LANGUAGE</span>
            <span>{language}</span>
          </div>
          <div className="box-detail">
            <span>BUDGET</span>
            <span>{budget}$</span>
          </div>
        </div>
      </div>
    </div>
  );
}
