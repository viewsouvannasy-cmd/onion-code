import { HomePageHeader } from "../homePage/home-page-header/HomePageHeader";
import { SectionSearch } from "../homePage/home-section-search/SectionSearch";

export function MovieSection() {
  const containmentState = {
    genrePath: "discover/movie?",
    detail: "",
  };

  return (
    <>
      <HomePageHeader />
      <SectionSearch containmentState={containmentState} />
    </>
  );
}
