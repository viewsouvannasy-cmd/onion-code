import { useState, useEffect } from "react";
import axios from "axios";
import { DisplayEpisodes } from "./DisplayEpisodes";

export function DetailForTv({ detailMovie, movieId }) {
  const [seasonNumber, setSeasonNumber] = useState(1);
  const [seasonInfo, setSeasonInfo] = useState([]);
  const [numberOfShow, setNumberOfShow] = useState(4);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSeasonInfo = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/tv/${movieId}/season/${seasonNumber}?api_key=cb8d9a517e7387524c6cd936f1752bc0`,
        );
        setSeasonInfo(response.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err, " Have a error at DisplayEpisodes");
      }
    };
    fetchSeasonInfo();
  }, [movieId, seasonNumber]);

  function handleSelectSeason(season) {
    if (season === seasonNumber) {
      return;
    }
    setIsLoading(true);
    setSeasonNumber(season);
  }

  function handleShowEpisode() {
    if (numberOfShow < seasonInfo?.episodes?.length) {
      setNumberOfShow(seasonInfo?.episodes?.length);
    } else {
      setNumberOfShow(4);
    }
  }

  return (
    <>
      <div className="container-detail-header-season">
        {detailMovie?.seasons?.map((season) => {
          if (season.season_number > 0) {
            return (
              <button
                key={season.id}
                className={`select-season-btn ${seasonNumber === season.season_number && "isSelect"}`}
                onClick={() => handleSelectSeason(season.season_number)}
              >
                Season {season.season_number}
              </button>
            );
          }
        })}
      </div>
      <div className="container-episode">
        {seasonInfo?.episodes?.slice(0, numberOfShow).map((episode, index) => {
          return (
            <DisplayEpisodes
              key={episode.id}
              episode={episode}
              index={index}
              isLoading={isLoading}
            />
          );
        })}
        <button onClick={handleShowEpisode}>
          <a href="#detail-header-season">
            {numberOfShow < seasonInfo?.episodes?.length
              ? "View more"
              : "View less"}
          </a>
        </button>
      </div>
    </>
  );
}
