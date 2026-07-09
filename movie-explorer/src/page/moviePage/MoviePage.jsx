import { useLocation } from "react-router";
import { HeaderSection } from "../../components/Header/HeaderSection";
import { TitleSection } from "./title-section/TitleSection";

export function MoviePage() {
  const location = useLocation();
  const currnetMovie = location.state;

  console.log(currnetMovie);
  return (
    <>
      <HeaderSection />
      <TitleSection />
    </>
  );
}
