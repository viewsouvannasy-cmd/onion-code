import "./HomePageHeader.css";
import { Link } from "react-router";

export function HomePageHeader() {
  return (
    <header className="container-header-main">
      <div className="container-header">
        <div className="header-left-section">
          <Link className="link-home-page" to="/">
            <div className="box-logo">
              <img src="image/onion.png" />
              <p>
                <span>n</span>ion
              </p>
            </div>
          </Link>
          <div className="container-select-section">
            <Link to="/movies">
              <button>Movie</button>
            </Link>
            <Link to="/series">
              <button>Series</button>
            </Link>
            <Link to="/anime">
              <button>Anime</button>
            </Link>
            <Link to="/cartoon">
              <button>Cartoon</button>
            </Link>
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
        <button>Movie</button>
        <button>Series</button>
        <button>Anime</button>
        <button>Cartoon</button>
      </div>
    </header>
  );
}
