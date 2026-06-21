import { HomePageHeader } from "../homePage/home-page-header/HomePageHeader";
import { SectionSearch } from "../homePage/home-section-search/SectionSearch";
export function AnimeSection() {
  const containmentState = {
    genrePath: "discover/tv?",
    detail:
      "&with_genres=16&with_origin_country=JP&language=en-US&sort_by=popularity.desc",
  };

  return (
    <>
      <HomePageHeader />
      <SectionSearch containmentState={containmentState} />
    </>
  );
}
