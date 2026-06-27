import "./HeaderSection.css";
import { Link } from "react-router";
import { useState } from "react";
export function HomePageHeader() {
  const [isFocus, setIsFocus] = useState(false);

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
            <div className="tooltip-review">review</div>
          </button>
          <button className="change-language-btn">
            EN
            <div className="tooltip">language</div>
          </button>
          <div className="container-profile">
            <button
              className="profile-user"
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
            ></button>
            <div
              className="arror"
              style={{
                display: isFocus ? "initial" : "none",
              }}
            ></div>
            <div
              className="container-list-setting"
              style={{
                display: isFocus ? "initial" : "none",
              }}
            >
              <div className="container-view-profile">
                <p>user name</p>
                <span>view profile</span>
              </div>
              <div className="container-setting-control">
                <button>Lists</button>
                <button>Favorites</button>
                <button>reviews</button>
                <button>dark mode</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-select-section-suppost">
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
    </header>
  );
}
