import { useState, useEffect } from "react";
import axios from "axios";
import { DisplayMoreLikeItem } from "./DisplayMoreLikeItem";
import "./MovieLikeSection.css";
import { api } from "../../../main";

export function MovieLikeSection({ mediaType, movieId }) {
  const [recommendMovie, setRecommendMovie] = useState([]);

  useEffect(() => {
    const fetchRecommend = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/${mediaType}/${movieId}/recommendations?api_key=${api}`,
        );
        setRecommendMovie(response.data.results.slice(0, 6));
      } catch (err) {
        console.log(err, "have error at MoreLikeSection");
      }
    };
    fetchRecommend();
  }, [mediaType, movieId]);

  return (
    <div className="container-more-like-section-main">
      <div className="more-like-section-header">
        <h3>MORE LIKE THIS</h3>
        <div></div>
      </div>
      <div className="container-more-like-item">
        {recommendMovie.map((movie) => {
          return <DisplayMoreLikeItem key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
}
