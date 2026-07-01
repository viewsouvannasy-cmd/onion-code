import { HeaderSection } from "../../components/Header/HeaderSection";

import { SectionSearch } from "../homePage/home-section-search/SectionSearch";
import { PupolarSection } from "../homePage/home-section-popular/PupolarSection";
import { TrendingSection } from "../homePage/home-trending/TrendingSection";
import { AwardsSection } from "../homePage/home-awards-section/AwardsSection";
import { FooterSection } from "../homePage/home-footer-section/FooterSection";
export function CartoonSection({ isLists, setIsLists }) {
  const containmentState = {
    genrePath: "discover/movie",
    detail:
      "&with_genres=16&with_origin_country=US&language=en-US&sort_by=popularity.desc",
    media_type: "movie",
  };
  return (
    <>
      <link rel="icon" href="image/onion.png" />

      <title>Onion - Cartoon</title>
      <HeaderSection />
      <SectionSearch containmentState={containmentState} />
      <PupolarSection
        containmentState={containmentState}
        isLists={isLists}
        setIsLists={setIsLists}
      />
      <TrendingSection containmentState={containmentState} />
      <AwardsSection containmentState={containmentState} />
      <FooterSection />
    </>
  );
}
