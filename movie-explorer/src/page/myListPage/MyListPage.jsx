import { HeaderSection } from "../../components/Header/HeaderSection";
import { MyListSection } from "./MyListSection";
import "./MyListPage.css";
export function MyListPage({ isLists, setIsLists }) {
  return (
    <>
      <link rel="icon" href="image/onion.png" />
      <title>Onion - my list</title>

      <HeaderSection />
      <MyListSection isLists={isLists} setIsLists={setIsLists} />
    </>
  );
}
