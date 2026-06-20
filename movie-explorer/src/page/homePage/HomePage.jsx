import { HomePageHeader } from "./home-page-header/HomePageHeader";
import { SectionSearch } from "./home-section-search/SectionSearch";
export function HomePage() {
  const url =
    "https://api.themoviedb.org/3/discover/movie?api_key=cb8d9a517e7387524c6cd936f1752bc0";
  const urlImage = "https://image.tmdb.org/t/p/original";

  return (
    <>
      <link rel="icon" href="image/onion.png" />
      <title>Onion</title>

      <HomePageHeader />
      <SectionSearch url={url} urlImage={urlImage} />
    </>
  );
}
