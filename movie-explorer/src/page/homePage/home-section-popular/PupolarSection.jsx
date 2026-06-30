import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import { DisplayMovie } from "./DisplayMovie";
import { DisplayListItems } from "./DisplayListItems";
import { createList } from "../../../utils/createList";
import "./PupolarSection.css";

export function PupolarSection({ containmentState, isLists, setIsLists }) {
  const [dataMovie, setDataMovie] = useState([]);
  const [isBackground, setIsBackground] = useState(false);
  const [isAnimation, setIsAnimation] = useState("");
  const [currentMovie, setCurrentMovie] = useState("");
  const [inputNameList, setInputNameList] = useState("");

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
    setInputNameList("");
    setTimeout(() => {
      setIsBackground(false);
    }, 100);
  }

  function handleInputNameList(e) {
    setInputNameList(e.target.value);
  }

  function handleCreateList(e) {
    e.preventDefault();

    createList(isLists, setIsLists, inputNameList);

    setInputNameList("");
    handleClose();
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
                setCurrentMovie={setCurrentMovie}
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
                setCurrentMovie={setCurrentMovie}
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
          <div className={isLists.length === 0 ? "not-have-list" : "box-list"}>
            {isLists.length === 0 ? (
              <>
                <p className="not-found">not found list.</p>
                <form onSubmit={handleCreateList}>
                  <span>Create your new list</span>
                  <input
                    placeholder="My list name..."
                    value={inputNameList}
                    onChange={handleInputNameList}
                    required
                  />
                  <button type="submit">Create</button>
                </form>
              </>
            ) : (
              isLists.map((list) => {
                return (
                  <DisplayListItems
                    key={list.listId}
                    list={list}
                    isLists={isLists}
                    setIsLists={setIsLists}
                    currentMovie={currentMovie}
                    handleClose={handleClose}
                  />
                );
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
}
