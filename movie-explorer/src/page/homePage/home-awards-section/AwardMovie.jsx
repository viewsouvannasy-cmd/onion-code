import { useNavigate } from "react-router";

export function AwardMoive({ movie, index, mediaType }) {
  const navigate = useNavigate();
  const backdropPath = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;

  function handleToOwnPage() {
    navigate(`/${mediaType}/${movie.id}`);
    window.scroll({ top: 0 });
  }

  return (
    <div
      className="container-detail-award"
      role="button"
      onClick={handleToOwnPage}
    >
      <img src={backdropPath} />
      <div className="box-background"></div>
      <h1>{index + 1}</h1>
      <span>{movie.vote_count} vote</span>
      <p>{movie.title || movie.name}</p>
    </div>
  );
}
