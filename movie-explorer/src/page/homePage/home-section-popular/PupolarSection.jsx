import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import { DisplayMovie } from "./DisplayMovie";
import "./PupolarSection.css";

export function PupolarSection({ containmentState, isLists }) {
  const [dataMovie, setDataMovie] = useState([]);
  const [isBackground, setIsBackground] = useState(false);
  const [isAnimation, setIsAnimation] = useState("");

  useEffect(() => {
    if (isBackground) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isBackground]);

  useEffect(() => {
    const fetchMovie = async () => {
      let response = await axios.get(
        `https://api.themoviedb.org/3/${containmentState.genrePath}?api_key=cb8d9a517e7387524c6cd936f1752bc0${containmentState.detail}`,
      );
      setDataMovie(response.data.results);
    };
    fetchMovie();
  }, [containmentState]);

  function handleClose() {
    setIsAnimation("close");
    setTimeout(() => {
      setIsBackground(false);
    }, 100);
  }

  return (
    <>
      <div className="container-pupolar-section-main">
        <div className="container-pupolar-section">
          <div className="container-title">
            <h3>Pupolar right now</h3>
            <Link to="#" className="link-view-all">
              view all
            </Link>
          </div>
        </div>
        <div className="container-movie-flex">
          {dataMovie.slice(0, 8).map((movie) => {
            return (
              <DisplayMovie
                key={movie.id}
                movie={movie}
                setIsBackground={setIsBackground}
                setIsAnimation={setIsAnimation}
              />
            );
          })}
        </div>

        <div className="container-movie-flex">
          {dataMovie.slice(10, 18).map((movie) => {
            return (
              <DisplayMovie
                key={movie.id}
                movie={movie}
                setIsBackground={setIsBackground}
                setIsAnimation={setIsAnimation}
              />
            );
          })}
        </div>
      </div>
      <div
        className="overlay-background"
        style={{ display: isBackground ? "flex" : "none" }}
      >
        <div className={`container-add-list ${isAnimation}`}>
          <div className="title-create-list">
            <p>Add to list</p>
            <button onClick={handleClose}>
              <img src="/image/icon/close.png" />
            </button>
          </div>
          <div className="box-list">
            {isLists.map((list) => {
              return (
                <div className="list">
                  <div
                    style={{
                      backgroundImage: list.background,
                    }}
                  ></div>
                  <div>
                    <h4>{list.name}</h4>
                    <p>
                      {list.listItems.length}{" "}
                      {list.listItems.length > 1 ? "items" : "item"}
                    </p>
                    <span></span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
