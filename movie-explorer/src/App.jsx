import { Routes, Route } from "react-router";
import { useState, useEffect } from "react";

import { HomePage } from "./page/homePage/HomePage";
import { MovieSection } from "./page/selectSection/MovieSection";
import { AnimeSection } from "./page/selectSection/AnimeSection";
import { SeriesSection } from "./page/selectSection/SeriesSection";
import { CartoonSection } from "./page/selectSection/CartoonSection";
import { MyListPage } from "./page/myListPage/MyListPage";
import { ItemInListPage } from "./page/itemInListPage/ItemInListPage";
import { ViewAllMoviePage } from "./page/viewAllMoviePage/ViewAllMoviePage";
import { MoviePage } from "./page/moviePage/MoviePage";
import { CastAndCrewPage } from "./page/castAndCrewPage/CastAndCrewPage";
import { SearchPage } from "./page/searchPage/SearchPage";
import { ErrorPage } from "./page/errorPage/ErrorPage";

import "./styles/animation.css";

function App() {
  const [isLists, setIsLists] = useState(
    JSON.parse(localStorage.getItem("myList")) || [],
  );

  useEffect(() => {
    localStorage.setItem("myList", JSON.stringify(isLists));
  }, [isLists]);

  return (
    <Routes>
      <Route
        index
        element={<HomePage isLists={isLists} setIsLists={setIsLists} />}
      />
      <Route
        path="movies"
        element={<MovieSection isLists={isLists} setIsLists={setIsLists} />}
      />
      <Route
        path="series"
        element={<SeriesSection isLists={isLists} setIsLists={setIsLists} />}
      />
      <Route
        path="anime"
        element={<AnimeSection isLists={isLists} setIsLists={setIsLists} />}
      />
      <Route
        path="cartoon"
        element={<CartoonSection isLists={isLists} setIsLists={setIsLists} />}
      />
      <Route
        path=":section/view-all/:page"
        element={<ViewAllMoviePage isLists={isLists} setIsLists={setIsLists} />}
      />
      <Route
        path="mylist"
        element={<MyListPage isLists={isLists} setIsLists={setIsLists} />}
      />
      <Route
        path="mylist/:listId"
        element={<ItemInListPage isLists={isLists} setIsLists={setIsLists} />}
      />
      <Route
        path=":mediaType/:movieId"
        element={<MoviePage isLists={isLists} setIsLists={setIsLists} />}
      />

      <Route
        path=":mediaType/:movieId/cast&crew"
        element={<CastAndCrewPage />}
      />

      <Route path="search/:type/:page" element={<SearchPage />} />

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
