import "./HomePageHeader.css";

export function HomePageHeader() {
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
            <button>Movie</button>
            <button>Series</button>
            <button>Anime</button>
            <button>Cartoon</button>
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
    </header>
  );
}
