import { useLocation } from "react-router";
import { useEffect } from "react";
import { clearData } from "../../utils/clearData";
import { HeaderSection } from "../../components/Header/HeaderSection";
import { FooterSection } from "../../components/Footer/FooterSection";
import "./CastAndCrewPage.css";

export function CastAndCrewPage() {
  const location = useLocation();
  const { data, cast, crew } = location.state;

  const newCast = clearData(cast);
  const newCrew = clearData(crew);

  useEffect(() => {
    document.title = `cast & crew - ${data.name || data.title}`;
  }, [data]);

  const urlPoster = `https://image.tmdb.org/t/p/original/${data.poster_path}`;

  return (
    <>
      <HeaderSection />

      <div className="container-cast-and-crew-main-page">
        <div className="container-cast-and-crew-header-page">
          <div>
            <img src={urlPoster} />
          </div>
          <div>
            <h1>Name Movie</h1>
            <button>
              <img src="/image/icon/left-arrow-back-main.png" />
              Back main
            </button>
          </div>
        </div>
      </div>

      <div className="container-show-cast-and-crew-main-page">
        <div className="container-show-cast-and-crew-page">
          <div>
            <h3>
              Cast <span>{newCast.length}</span>
            </h3>
            <div className="container-for-cast">
              {newCast.map((person) => {
                const personProfile = `https://image.tmdb.org/t/p/original/${person.profile_path}`;
                return (
                  <div key={person.id} className="cast-and-crew-item-page">
                    <div>
                      <img
                        src={
                          person.profile_path
                            ? personProfile
                            : "/image/no-profile.jpg"
                        }
                      />
                    </div>
                    <div>
                      <p>{person.name}</p>
                      <span>{person.known_for_department}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h3>
              Crew <span>{newCrew.length}</span>
            </h3>

            <div className="container-for-crew">
              {newCrew.map((person) => {
                const personProfile = `https://image.tmdb.org/t/p/original/${person.profile_path}`;
                return (
                  <div key={person.id} className="cast-and-crew-item-page">
                    <div>
                      <img
                        src={
                          person.profile_path
                            ? personProfile
                            : "/image/no-profile.jpg"
                        }
                      />
                    </div>
                    <div>
                      <p>{person.name}</p>
                      <span>{person.known_for_department}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <FooterSection />
    </>
  );
}
