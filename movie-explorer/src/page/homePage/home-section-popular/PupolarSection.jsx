import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import { DisplayMovie } from "./DisplayMovie";
import "./PupolarSection.css";

export function PupolarSection({ containmentState }) {
  const [dataMovie, setDataMovie] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      let response = await axios.get(
        `https://api.themoviedb.org/3/${containmentState.genrePath}?api_key=cb8d9a517e7387524c6cd936f1752bc0${containmentState.detail}`,
      );
      setDataMovie(response.data.results);
    };
    fetchMovie();
  }, [containmentState]);

  console.log(dataMovie);

  return (
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
          return <DisplayMovie key={movie.id} movie={movie} />;
        })}
      </div>

      <div className="container-movie-flex">
        {dataMovie.slice(10, 18).map((movie) => {
          return <DisplayMovie key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
}
