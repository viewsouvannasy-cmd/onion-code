import { HeaderSection } from "../../components/Header/HeaderSection";
import { SectionSearch } from "./home-section-search/SectionSearch";
import { PupolarSection } from "./home-section-popular/PupolarSection";
import { TrendingSection } from "./home-trending/TrendingSection";
import { AwardsSection } from "./home-awards-section/AwardsSection";
import { FooterSection } from "../../components/Footer/FooterSection";

export function HomePage({ isLists, setIsLists }) {
  const containmentState = {
    name: "home",
    genrePath: "trending/all/week",
    detail: "",
    media_type: "tv",
  };
  return (
    <>
      <link rel="icon" href="image/onion.png" />
      <title>Onion</title>

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
