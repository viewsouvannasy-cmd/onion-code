import { useState, useEffect } from "react";
import axios from "axios";

import "./PopupPlayTrailer.css";
import { api } from "../../../main";

export function PopupPlayTrailer({
  isOverlayTrailer,
  isAnimationTrailer,
  setIsOverlayTrailer,
  setIsAnimationTrailer,
  mediaType,
  movieId,
}) {
  const [dataVideo, setDataVideo] = useState("");

  useEffect(() => {
    const fetchDataVideo = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/${mediaType}/${movieId}?api_key=${api}&language=en-US&append_to_response=videos`,
        );
        const videosTrailer = response.data.videos.results.filter(
          (v) => v.type === "Trailer" && v.site === "YouTube",
        );
        response.data.videos.results = videosTrailer;
        setDataVideo(response.data);
      } catch (error) {
        console.log("fetch video faild in PopupPlayTrailer", error);
      }
    };
    fetchDataVideo();
  }, [mediaType, movieId]);

  function handleCloseTrailer() {
    setIsAnimationTrailer("close");
    setTimeout(() => {
      setIsOverlayTrailer(false);
    }, 100);
  }

  const keyVideo = dataVideo?.videos?.results?.[0]?.key || null;

  return (
    <div
      className="container-overlay-play-tralier"
      style={{
        display: isOverlayTrailer && "flex",
      }}
    >
      <div className={`container-trailer ${isAnimationTrailer}`}>
        <div>
          <p>{dataVideo?.name || dataVideo?.title}</p>
          <button onClick={handleCloseTrailer}>
            <img src="/image/icon/close.png" />
          </button>
        </div>
        <iframe
          src={
            isOverlayTrailer ? `https://www.youtube.com/embed/${keyVideo}` : ""
          }
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
