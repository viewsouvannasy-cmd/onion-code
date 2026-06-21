import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import "./PupolarSection.css";

export function PupolarSection({ containmentState }) {
  const [dataMovie, setDataMovie] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      let response = await axios.get(
        `https://api.themoviedb.org/3/${containmentState.genrePath}api_key=cb8d9a517e7387524c6cd936f1752bc0${containmentState.detail}`,
      );
      setDataMovie(response.data.results);
    };
    fetchMovie();
  }, [containmentState]);

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
    </div>
  );
}
