import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { api } from "../../../main";

export function DisplayMoreLikeItem({ movie }) {
  const [addDetail, setAddDetail] = useState([]);
  const [randomGenre, setRandomGenre] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDetail = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/${movie.media_type}/${movie.id}?api_key=${api}&append_to_response=credits`,
      );

      setRandomGenre(Math.floor(Math.random() * response.data.genres.length));
      setAddDetail(response.data);
    };
    fetchDetail();
  }, [movie]);

  const urlPoster = `https://image.tmdb.org/t/p/original${addDetail.poster_path}`;
  const genre = addDetail?.genres?.[randomGenre]?.name || "";

  function handleToOwnPage() {
    window.scroll({ top: 0 });
    navigate(`/${movie.media_type}/${addDetail.id}`);
  }

  return (
    <div className="more-like-item" role="button" onClick={handleToOwnPage}>
      <div>
        <img src={urlPoster} loading="lazy" />
      </div>
      <p>
        {addDetail?.title || addDetail?.name} &#183; {genre}
      </p>
    </div>
  );
}
