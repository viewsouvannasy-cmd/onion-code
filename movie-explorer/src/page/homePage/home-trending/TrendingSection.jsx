import "./TrendingSection.css";

export function TrendingSection({ containmentState }) {
  return (
    <div className="container-trending-section-main">
      <div className="container-trending-section">
        <h3>Trending this week</h3>
      </div>
      <div className="container-movie-trending">
        <div className="movie-trending">
          <h2>1</h2>
          <img src="https://dcassetcdn.com/design_img/2303665/189158/189158_12066253_2303665_08e5bcb3_thumbnail.png" />
          <div className="container-vote">
            <p>name</p>
            <span>Action &#183; 2026</span>
            <span>9.7</span>
            <div className="line-score">
              <div className="line-score-rate"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
