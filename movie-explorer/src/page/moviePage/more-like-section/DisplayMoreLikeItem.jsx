import { useState, useEffect } from "react";
import axios from "axios";

export function DisplayMoreLikeItem({ movie }) {
  const [addDetail, setAddDetail] = useState([]);
  const [randomGenre, setRandomGenre] = useState(0);

  useEffect(() => {
    const fetchDetail = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/${movie.media_type}/${movie.id}?api_key=cb8d9a517e7387524c6cd936f1752bc0&append_to_response=credits`,
      );

      setRandomGenre(Math.floor(Math.random() * response.data.genres.length));
      setAddDetail(response.data);
    };
    fetchDetail();
  }, [movie]);

  const urlPoster = `https://image.tmdb.org/t/p/original${addDetail.poster_path}`;
  const genre = addDetail?.genres?.[randomGenre]?.name || "";

  return (
    <div className="more-like-item">
      <div>
        <img src={urlPoster} loading="lazy" />
      </div>
      <p>
        {addDetail?.title || addDetail?.name} &#183; {genre}
      </p>
    </div>
  );
}
