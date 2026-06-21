import { Routes, Route } from "react-router";
import { HomePage } from "./page/homePage/HomePage";
import { MovieSection } from "./page/homePage/MovieSection";
import { AnimeSection } from "./page/homePage/AnimeSection";
import { SeriesSection } from "./page/homePage/SeriesSection";
import { CartoonSection } from "./page/homePage/CartoonSection";
function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MovieSection />} />
        <Route path="series" element={<SeriesSection />} />
        <Route path="anime" element={<AnimeSection />} />
        <Route path="cartoon" element={<CartoonSection />} />
      </Routes>
    </>
  );
}

export default App;
