import "./HeaderSection.css";
import { Link } from "react-router";

export function HeaderSection() {
  return (
    <header className="container-header-main">
      <div className="container-header">
        <div className="header-left-section">
          <Link className="link-home-page" to="/">
            <div className="box-logo">
              <img src="/image/onion.png" />
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
            <Link to="/anim">
              <button>Anime</button>
            </Link>
            <Link to="/cartoon">
              <button>Cartoon</button>
            </Link>
          </div>
        </div>

        <div className="header-right-section">
          <Link
            className="my-list-btn"
            to="/mylist"
            onMouseDown={(e) => {
              e.preventDefault();
            }}
          >
            My Lists
          </Link>
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
