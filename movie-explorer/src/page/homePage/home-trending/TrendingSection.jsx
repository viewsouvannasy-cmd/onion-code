import { useState, useEffect } from "react";
import axios from "axios";
import { MovieTrending } from "./MovieTrending";
import { sortArray } from "../../../utils/sortArray";
import "./TrendingSection.css";

export function TrendingSection({ containmentState }) {
  const [rate, setRate] = useState([]);

  useEffect(() => {
    const fetchRate = async () => {
      let response = await axios.get(
        `https://api.themoviedb.org/3/${containmentState.genrePath}?api_key=cb8d9a517e7387524c6cd936f1752bc0${containmentState.detail}`,
      );

      const dataMovie = sortArray(response.data.results, "vote_average");

      setRate(dataMovie.reverse().slice(0, 10));
    };

    fetchRate();
  }, [containmentState]);

  return (
    <>
      <div className="container-trending-section-main">
        <div className="container-trending-section">
          <h3>Trending this week</h3>
        </div>
      </div>
      <div className="container-movie-trending-main">
        <div className="container-movie-trending">
          {rate.map((movie, index) => {
            return (
              <MovieTrending
                key={movie.id}
                movie={movie}
                index={index}
                containmentState={containmentState}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
