import "./HomePageHeader.css";
import { useNavigate } from "react-router";

export function HomePageHeader() {
  const navigate = useNavigate();

  function handleClick(sectionName) {
    navigate(`/${sectionName}`);
  }

  return (
    <header className="container-header-main">
      <div className="container-header">
        <div className="header-left-section">
          <div className="box-logo">
            <img src="image/onion.png" />
            <p>
              <span>n</span>ion
            </p>
          </div>
          <div className="container-select-section">
            <button onClick={() => handleClick("movie")}>Movie</button>
            <button onClick={() => handleClick("series")}>Series</button>
            <button onClick={() => handleClick("anime")}>Anime</button>
            <button onClick={() => handleClick("cartoon")}>Cartoon</button>
          </div>
        </div>

        <div className="header-right-section">
          <button className="review-btn">
            <img src="image/icon/star.png" />
          </button>
          <button className="change-language-btn">EN</button>
          <div className="profile-user"></div>
        </div>
      </div>
      <div className="container-select-section-suppost">
        <button onClick={() => handleClick("movie")}>Movie</button>
        <button onClick={() => handleClick("series")}>Series</button>
        <button onClick={() => handleClick("anime")}>Anime</button>
        <button onClick={() => handleClick("cartoon")}>Cartoon</button>
      </div>
    </header>
  );
}
