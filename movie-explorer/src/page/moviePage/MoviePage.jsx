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

import { PopupAddToList } from "../../components/popup-add-to-List/PopupAddToList";
import { PopupPlayTrailer } from "./popupPlayTrailer/PopupPlayTrailer";

export function MoviePage({ isLists, setIsLists }) {
  const { mediaType, movieId } = useParams();
  const [detailMovie, setDetailMovie] = useState([]);

  //this is use to control popup app to list
  const [isBackground, setIsBackground] = useState(false);
  const [isAnimation, setIsAnimation] = useState("");
  const [currentMovie, setCurrentMovie] = useState({});

  //this is use to control popup play trailer
  const [isOverlayTrailer, setIsOverlayTrailer] = useState(false);
  const [isAnimationTrailer, setIsAnimationTrailer] = useState("");

  useEffect(() => {
    if (isBackground) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isBackground]);

  useEffect(() => {
    if (isOverlayTrailer) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOverlayTrailer]);

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
      <TitleSection
        detailMovie={detailMovie}
        mediaType={mediaType}
        setIsBackground={setIsBackground}
        setIsAnimation={setIsAnimation}
        setCurrentMovie={setCurrentMovie}
        setIsOverlayTrailer={setIsOverlayTrailer}
        setIsAnimationTrailer={setIsAnimationTrailer}
      />
      <OverViewSection detailMovie={detailMovie} mediaType={mediaType} />
      <CastAndCrewSection detailMovie={detailMovie} mediaType={mediaType} />
      <DetailSection
        detailMovie={detailMovie}
        mediaType={mediaType}
        movieId={movieId}
      />
      <MovieLikeSection mediaType={mediaType} movieId={movieId} />
      <FooterSection />

      {/* this popup is for add to list */}
      <PopupAddToList
        isBackground={isBackground}
        setIsBackground={setIsBackground}
        isAnimation={isAnimation}
        setIsAnimation={setIsAnimation}
        isLists={isLists}
        setIsLists={setIsLists}
        currentMovie={currentMovie}
      />

      {/* this popup is for play trailer */}
      <PopupPlayTrailer
        isOverlayTrailer={isOverlayTrailer}
        isAnimationTrailer={isAnimationTrailer}
        setIsOverlayTrailer={setIsOverlayTrailer}
        setIsAnimationTrailer={setIsAnimationTrailer}
        mediaType={mediaType}
        movieId={movieId}
      />
    </>
  );
}
