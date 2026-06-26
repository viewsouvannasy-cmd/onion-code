import { HomePageHeader } from "../homePage/home-page-header/HomePageHeader";
import { SectionSearch } from "../homePage/home-section-search/SectionSearch";
import { PupolarSection } from "../homePage/home-section-popular/PupolarSection";
import { TrendingSection } from "../homePage/home-trending/TrendingSection";
import { AwardsSection } from "../homePage/home-awards-section/AwardsSection";
import { FooterSection } from "../homePage/home-footer-section/FooterSection";

export function MovieSection() {
  const containmentState = {
    genrePath: "discover/movie",
    detail: "",
  };

  return (
    <>
      <link rel="icon" href="image/onion.png" />
      <title>Onion - Movie</title>
      <HomePageHeader />
      <SectionSearch containmentState={containmentState} />
      <PupolarSection containmentState={containmentState} />
      <TrendingSection containmentState={containmentState} />
      <AwardsSection containmentState={containmentState} />
      <FooterSection />
    </>
  );
}
