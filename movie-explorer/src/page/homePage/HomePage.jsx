import { HomePageHeader } from "./home-page-header/HomePageHeader";
import { SectionSearch } from "./home-section-search/SectionSearch";
import { PupolarSection } from "./home-section-popular/PupolarSection";
import { TrendingSection } from "./home-trending/TrendingSection";
export function HomePage() {
  const containmentState = {
    genrePath: "trending/all/week",
    detail: "",
  };
  return (
    <>
      <link rel="icon" href="image/onion.png" />
      <title>Onion</title>

      <HomePageHeader />
      <SectionSearch containmentState={containmentState} />
      <PupolarSection containmentState={containmentState} />
      <TrendingSection containmentState={containmentState} />
    </>
  );
}
