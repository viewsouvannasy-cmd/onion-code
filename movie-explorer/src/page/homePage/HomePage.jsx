import { HomePageHeader } from "./home-page-header/HomePageHeader";
import { SectionSearch } from "./home-section-search/SectionSearch";
import { PupolarSection } from "./home-section-popular/PupolarSection";
export function HomePage() {
  const containmentState = {
    genrePath: "trending/all/week?",
    detail: "",
  };
  return (
    <>
      <link rel="icon" href="image/onion.png" />
      <title>Onion</title>

      <HomePageHeader />
      <SectionSearch containmentState={containmentState} />
      <PupolarSection containmentState={containmentState} />
    </>
  );
}
