import { useLocation } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import { HeaderSection } from "../../components/Header/HeaderSection";
import { TitleSection } from "./title-section/TitleSection";
import { OverViewSection } from "./overview-section/OverViewSection";
import { CastAndCrewSection } from "./castcrew-section/CastAndCrewSection";

export function MoviePage() {
  const location = useLocation();
  const currentMovie = location.state;

  const [detailMovie, setDetailMovie] = useState([]);

  useEffect(() => {
    const getDetail = async () => {
      let response = await axios.get(
        `https://api.themoviedb.org/3/${currentMovie.media_type}/${currentMovie.id}?api_key=cb8d9a517e7387524c6cd936f1752bc0&append_to_response=credits`,
      );

      setDetailMovie(response.data);
    };
    getDetail();
  }, [currentMovie]);

  return (
    <>
      <HeaderSection />
      <TitleSection detailMovie={detailMovie} />
      <OverViewSection detailMovie={detailMovie} />
      <CastAndCrewSection detailMovie={detailMovie} />
    </>
  );
}
