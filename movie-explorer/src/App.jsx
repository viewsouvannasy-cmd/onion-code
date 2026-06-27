import { Routes, Route } from "react-router";
import { HomePage } from "./page/homePage/HomePage";
import { MovieSection } from "./page/selectSection/MovieSection";
import { AnimeSection } from "./page/selectSection/AnimeSection";
import { SeriesSection } from "./page/selectSection/SeriesSection";
import { CartoonSection } from "./page/selectSection/CartoonSection";
import { MyListPage } from "./page/myListPage/MyListPage";
function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="movies" element={<MovieSection />} />
      <Route path="series" element={<SeriesSection />} />
      <Route path="anime" element={<AnimeSection />} />
      <Route path="cartoon" element={<CartoonSection />} />
      <Route path="mylist" element={<MyListPage />} />
    </Routes>
  );
}

export default App;
