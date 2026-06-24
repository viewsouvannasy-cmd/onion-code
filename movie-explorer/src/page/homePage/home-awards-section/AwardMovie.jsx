export function AwardMoive({ movie, index }) {
  const backdropPath = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;

  return (
    <div key={movie.id} className="container-detail-award">
      <img src={backdropPath} />
      <div className="box-background"></div>
      <h1>{index + 1}</h1>
      <span>{movie.vote_count} vote</span>
      <p>{movie.title || movie.name}</p>
    </div>
  );
}
