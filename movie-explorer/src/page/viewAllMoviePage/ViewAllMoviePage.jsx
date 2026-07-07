import { useLocation, useParams, useNavigate } from "react-router";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { HeaderSection } from "../../components/Header/HeaderSection";
import { DisplayMovieViewAll } from "./DisplayMovieViewAll";
import { PopupAddToList } from "../../components/popup-add-to-List/PopupAddToList";
import "./viewAllMoviePage.css";

export function ViewAllMoviePage({ isLists, setIsLists }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { detail, genrePath, media_type } = location.state;
  const { section, page } = useParams();

  const inputPageRef = useRef(null);

  const [dataMovie, setDataMovie] = useState(new Array(15).fill("a"));
  const [genreMovie, setGenreMovie] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [inputPage, setInputPage] = useState(page);

  // these state it use to control popup
  const [isBackground, setIsBackground] = useState(false);
  const [isAnimation, setIsAnimation] = useState("");

  // these use to store info of movie
  const [currentMovie, setCurrentMovie] = useState({});

  useEffect(() => {
    if (isBackground) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isBackground]);

  useEffect(() => {
    const loadDataMovie = async () => {
      try {
        let response = await axios.get(
          `https://api.themoviedb.org/3/${genrePath}?api_key=cb8d9a517e7387524c6cd936f1752bc0${detail}&page=${page}`,
        );
        const data = response.data;

        setDataMovie(data.results.slice(0, 30));
        setTotalPage(data.total_pages);

        response = await axios.get(
          `https://api.themoviedb.org/3/genre/${media_type}/list?api_key=cb8d9a517e7387524c6cd936f1752bc0`,
        );

        setGenreMovie(response.data.genres);

        setIsLoading(false);
      } catch (err) {
        console.log(`${err} have a erro at ViewAllMoviePage`);
      }
    };

    loadDataMovie();
  }, [genrePath, detail, page, media_type]);

  function handleToPage(pageNum) {
    navigate(`/${section}/view-all/${pageNum}`, {
      state: {
        genrePath: genrePath,
        detail: detail,
        media_type: media_type,
      },
    });
    setDataMovie(new Array(15).fill("a"));
    setIsLoading(true);
    window.scrollTo({ top: 0 });
    setInputPage(pageNum);
  }

  function handleInputPage(e) {
    if (e.key === "Enter") {
      if (inputPage !== "" && /^\d+$/.test(inputPage)) {
        inputPageRef.current.blur(false);
        handleToPage(inputPage);
        setInputPage(inputPage);
        return;
      }
    }
    setInputPage(e.target.value);
  }

  return (
    <>
      <title>Onion - view all</title>

      <HeaderSection />

      <div className="container-view-all-movie-main">
        <div className="container-title-genre-slid">
          {genreMovie.map((genre) => {
            return <button key={genre.id}>{genre.name}</button>;
          })}
        </div>
        <div className="container-view-all-movie-grid">
          {dataMovie.map((movie) => {
            return (
              <DisplayMovieViewAll
                key={crypto.randomUUID()}
                movie={movie}
                isLoading={isLoading}
                setIsBackground={setIsBackground}
                setIsAnimation={setIsAnimation}
                setCurrentMovie={setCurrentMovie}
              />
            );
          })}
        </div>
        <div className="container-change-page-view-all">
          <input
            inputMode="numeric"
            ref={inputPageRef}
            onChange={handleInputPage}
            onKeyDown={handleInputPage}
            value={inputPage}
          />
          <span>
            {page} of {totalPage}
          </span>
          <button onClick={() => handleToPage(Number(page) - 1)}>
            <img src="/image/icon/left-arrow.png" />
          </button>
          <button onClick={() => handleToPage(Number(page) + 1)}>
            <img src="/image/icon/right-arrow.png" />
          </button>
        </div>
      </div>
      <PopupAddToList
        isBackground={isBackground}
        setIsBackground={setIsBackground}
        isAnimation={isAnimation}
        setIsAnimation={setIsAnimation}
        isLists={isLists}
        setIsLists={setIsLists}
        currentMovie={currentMovie}
      />
    </>
  );
}
