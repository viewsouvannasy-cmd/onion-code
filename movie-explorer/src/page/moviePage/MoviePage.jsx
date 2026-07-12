import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import { HeaderSection } from "../../components/Header/HeaderSection";
import { TitleSection } from "./title-section/TitleSection";
import { OverViewSection } from "./overview-section/OverViewSection";
import { CastAndCrewSection } from "./castcrew-section/CastAndCrewSection";
import { DetailSection } from "./movie-detail-section/DetailSection";
import { MovieLikeSection } from "./more-like-section/MoreLikeSection";
import { FooterSection } from "../../components/Footer/FooterSection";

export function MoviePage() {
  const { mediaType, movieId } = useParams();

  const [detailMovie, setDetailMovie] = useState([]);

  useEffect(() => {
    const getDetail = async () => {
      let response = await axios.get(
        `https://api.themoviedb.org/3/${mediaType}/${movieId}?api_key=cb8d9a517e7387524c6cd936f1752bc0&append_to_response=credits`,
      );

      setDetailMovie(response.data);
    };
    getDetail();
  }, [mediaType, movieId]);

  useEffect(() => {
    document.title = `Onion - ${detailMovie?.name || detailMovie?.title}`;
  }, [detailMovie]);

  return (
    <>
      <HeaderSection />
      <TitleSection detailMovie={detailMovie} mediaType={mediaType} />
      <OverViewSection detailMovie={detailMovie} mediaType={mediaType} />
      <CastAndCrewSection detailMovie={detailMovie} />
      <DetailSection detailMovie={detailMovie} mediaType={mediaType} />
      <MovieLikeSection mediaType={mediaType} movieId={movieId} />
      <FooterSection />
    </>
  );
}
