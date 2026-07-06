import { HeaderSection } from "../../components/Header/HeaderSection";

import { SectionSearch } from "../homePage/home-section-search/SectionSearch";
import { PupolarSection } from "../homePage/home-section-popular/PupolarSection";
import { TrendingSection } from "../homePage/home-trending/TrendingSection";
import { AwardsSection } from "../homePage/home-awards-section/AwardsSection";
import { FooterSection } from "../homePage/home-footer-section/FooterSection";
export function SeriesSection({ isLists, setIsLists }) {
  const containmentState = {
    name: "serier",
    genrePath: "discover/tv",
    detail: "",
    media_type: "tv",
  };
  return (
    <>
      <link rel="icon" href="image/onion.png" />
      <title>Onion - Series</title>
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
