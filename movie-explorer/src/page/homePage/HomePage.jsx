import { HeaderSection } from "../../components/Header/HeaderSection";
import { SectionSearch } from "./home-section-search/SectionSearch";
import { PupolarSection } from "./home-section-popular/PupolarSection";
import { TrendingSection } from "./home-trending/TrendingSection";
import { AwardsSection } from "./home-awards-section/AwardsSection";
import { FooterSection } from "./home-footer-section/FooterSection";
export function HomePage() {
  const containmentState = {
    genrePath: "trending/all/week",
    detail: "",
  };
  return (
    <>
      <link rel="icon" href="image/onion.png" />
      <title>Onion</title>

      <HeaderSection />
      <SectionSearch containmentState={containmentState} />
      <PupolarSection containmentState={containmentState} />
      <TrendingSection containmentState={containmentState} />
      <AwardsSection containmentState={containmentState} />
      <FooterSection />
    </>
  );
}
