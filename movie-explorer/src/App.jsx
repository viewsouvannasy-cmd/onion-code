import { Routes, Route } from "react-router";

import { HomePage } from "./page/homePage/HomePage";
import { SelectSectionPage } from "./page/homePage/SelectSectionPage";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path=":sectionName" element={<SelectSectionPage />} />
      </Routes>
    </>
  );
}

export default App;
