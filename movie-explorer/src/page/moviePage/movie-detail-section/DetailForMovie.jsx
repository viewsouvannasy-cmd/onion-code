import dayjs from "dayjs";
import { calculateTime } from "../../../utils/calculateTime";
import { formatMoney } from "../../../utils/formatMoney";

export function DetailForMovie({ detailMovie, currentMovie }) {
  const format =
    currentMovie.media_type.slice(0, 1).toUpperCase() +
    currentMovie.media_type.slice(1, currentMovie.media_type.length);
  const runtime = calculateTime(detailMovie?.runtime);
  const releaseDate = dayjs(currentMovie.release_date).format("MMMM D, YYYY");
  const revenue = formatMoney(detailMovie?.revenue);
  return (
    <div className="container-detail-box">
      <div>
        <span>FORMAT</span>
        <p>{format}</p>
      </div>
      <div>
        <span>RUNTIME</span>
        <p>{runtime}</p>
      </div>
      <div>
        <span>RELEASE DATE</span>
        <p>{releaseDate}</p>
      </div>
      <div>
        <span>RATING</span>
        <p>{currentMovie.vote_average.toFixed(1)}</p>
      </div>
      <div>
        <span>REVENUE</span>
        <p>{revenue}$</p>
      </div>
    </div>
  );
}
