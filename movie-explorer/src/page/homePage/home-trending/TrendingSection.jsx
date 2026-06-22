import { useState, useEffect } from "react";
import axios from "axios";
import { MovieTrending } from "./MovieTrending";
import "./TrendingSection.css";

export function TrendingSection({ containmentState }) {
  const [rate, setRate] = useState([]);

  useEffect(() => {
    const fetchRate = async () => {
      let response = await axios.get(
        `https://api.themoviedb.org/3/${containmentState.genrePath}?api_key=cb8d9a517e7387524c6cd936f1752bc0${containmentState.detail}`,
      );

      const dataMovie = response.data.results;
      let temp;

      for (let i = 0; i < dataMovie.length; i++) {
        for (let j = i + 1; j < dataMovie.length; j++) {
          if (dataMovie[i].vote_average > dataMovie[j].vote_average) {
            temp = dataMovie[i];
            dataMovie[i] = dataMovie[j];
            dataMovie[j] = temp;
          }
        }
      }
      setRate(dataMovie.reverse().slice(0, 3));
    };

    fetchRate();
  }, [containmentState]);

  return (
    <div className="container-trending-section-main">
      <div className="container-trending-section">
        <h3>Trending this week</h3>
      </div>
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
  );
}
