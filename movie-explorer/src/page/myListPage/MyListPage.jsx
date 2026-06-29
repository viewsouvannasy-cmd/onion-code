import { HeaderSection } from "../../components/Header/HeaderSection";
import { MyListSection } from "./MyListSection";
import "./MyListPage.css";
export function MyListPage({ isLists, setIsLists }) {
  return (
    <>
      <title>Onion - my list</title>

      <HeaderSection />
      <MyListSection isLists={isLists} setIsLists={setIsLists} />
    </>
  );
}
