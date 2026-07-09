import "./TitleSection.css";

export function TitleSection() {
  return (
    <div className="container-title-section">
      <img
        className="backdrop-image-cover-title-section"
        src="https://www.apple.com/tv-pr/articles/2025/10/apple-original-films-blockbuster-feature-f1-the-movie-from-joseph-kosinski-to-make-global-streaming-debut-on-friday-december-12-2025/images/big-image/big-image-01/101325_F1_Streaming_Date_Announcement_Big_Image_01_big_image_post.jpg.large.jpg"
      />
      <div className="background-title-section"></div>
      <div className="container-info-movie-main">
        <div className="container-info-movie">
          <div>
            <img src="https://resizing.flixster.com/5Q22ZbwHwgkaD60RZvLq-j6oE9c=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2YyYmY3OGU3LWY2ZDgtNGNhYy04NmJhLWFiZGM2YjM3YTI1Zi5qcGc=" />
          </div>
          <div>
            <h1>F1 THE MOVIE</h1>
            <span>2026 &#183; 1h 53m</span>
            <div className="box-genre-of-movie">
              <button>Action</button>
              <button>Action</button>
              <button>Action</button>
            </div>
            <div className="box-btn-my-list-and-play-trailer">
              <button>+My list</button>
              <button>Play trailer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
