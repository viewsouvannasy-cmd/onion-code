import { useState, useEffect } from "react";
import { sortArray } from "../../../utils/sortArray";
import axios from "axios";
import { AwardMoive } from "./AwardMovie";
import "./AwardsSection.css";
export function AwardsSection() {
  const [movieRate, setMovieRate] = useState([]);
  const [animeRate, setAnimeRate] = useState([]);

  useEffect(() => {
    const fetchMovieRate = async () => {
      let response = await axios.get(
        "https://api.themoviedb.org/3/discover/movie?api_key=cb8d9a517e7387524c6cd936f1752bc0&sort_by=vote_average.desc&vote_count.gte=1000&primary_release_year=2026&language=en-US",
      );
      setMovieRate(
        sortArray(response.data.results, "vote_count").reverse().slice(0, 3),
      );

      response = await axios.get(
        "https://api.themoviedb.org/3/discover/tv?api_key=cb8d9a517e7387524c6cd936f1752bc0&first_air_date_year=2026&with_origin_country=JP",
      );
      setAnimeRate(
        sortArray(response.data.results, "vote_count").reverse().slice(0, 3),
      );
    };
    fetchMovieRate();
  }, []);

  return (
    <>
      <div className="container-award-section-main">
        <div className="container-award-section">
          <div className="container-title-award">
            <h3>Awards</h3>
            <a>view all</a>
          </div>
        </div>
      </div>
      <div className="container-award-rank-movie-main">
        <div className="container-award-rank-movie">
          <div className="award-container">
            <h4>Movie</h4>
            <div className="box-award-movie">
              {movieRate.map((movie, index) => {
                return (
                  <AwardMoive key={movie.id} movie={movie} index={index} />
                );
              })}
            </div>
          </div>

          <div className="award-container-two">
            <h4>Anime</h4>
            <div className="box-award-movie">
              {animeRate.map((movie, index) => {
                return (
                  <AwardMoive key={movie.id} movie={movie} index={index} />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
