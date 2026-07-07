import dayjs from "dayjs";

export function getInfoMovie(movie, urlPoster) {
  const urlBackdrop = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
  const currentDate = dayjs().format("D/M/YYYY");
  return {
    id: movie.id,
    add_date: currentDate,
    url_poster: urlPoster,
    url_backdrop: urlBackdrop,
    name: movie.title || movie.name,
    date_release: movie.release_date || movie.first_air_date,
  };
}
