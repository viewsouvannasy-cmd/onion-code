import "./CastAndCrewSection.css";

export function CastAndCrewSection({ detailMovie }) {
  const dataCast = detailMovie?.credits?.cast?.slice(0, 10) || [];
  return (
    <div className="container-cast-and-crew-section-main">
      <div className="container-cast-and-crew-header">
        <h3>CAST & CREW</h3>
        <div></div>
      </div>
      <div className="container-show-cast-and-crew">
        {dataCast.map((person) => {
          const profilePath = `https://image.tmdb.org/t/p/w185${person.profile_path}`;
          return (
            <div key={person.id} className="cast-and-crew-item">
              <div>
                <img
                  src={
                    person.profile_path ? profilePath : "/image/no-profile.jpg"
                  }
                  loading="lazy"
                />
              </div>
              <div>
                <p>{person.name}</p>
                <span>{person.character}</span>
              </div>
            </div>
          );
        })}

        <button>
          View More
          <img src="/image/icon/left-arrow-view-more.png" />
        </button>
      </div>
    </div>
  );
}
