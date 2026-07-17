import { useNavigate } from "react-router";
import { useState, useRef } from "react";
import { DisplayItemSearch } from "./DisplayItemSearch";
import "./ResultsSearchSection.css";

export function ResultsSearchSection({
  isLoading,
  resultsMovie,
  resultsTv,
  type,
  page,
  queryValue,
  setIsLoading,
}) {
  const navigate = useNavigate();

  const [inputPage, setInputPage] = useState(page);
  const inputPageRef = useRef(null);

  function handleChangePage(numPage) {
    if (
      numPage < 1 ||
      numPage > resultsMovie?.total_pages ||
      numPage > resultsTv?.total_pages
    ) {
      return;
    }
    navigate(`/search/${type}/${numPage}?query=${queryValue}`);
    setIsLoading(true);
    window.scroll({ top: 0 });
    setInputPage(numPage);
  }

  function handleInputPage(e) {
    if (e.key === "Enter") {
      handleChangePage(inputPage);
      inputPageRef.current.blur(false);
    }
  }

  return (
    <>
      <div className="container-result-search-main">
        <div className="container-result-search">
          {isLoading &&
            new Array(15).fill("a").map((item, index) => {
              return (
                <DisplayItemSearch
                  key={index}
                  item={item}
                  isLoading={isLoading}
                  type={type}
                />
              );
            })}

          {type === "movie"
            ? resultsMovie?.results?.map((item) => {
                return (
                  <DisplayItemSearch
                    key={item.id}
                    item={item}
                    isLoading={isLoading}
                    type={type}
                  />
                );
              })
            : resultsTv?.results?.map((item) => {
                return (
                  <DisplayItemSearch
                    key={item.id}
                    item={item}
                    isLoading={isLoading}
                    type={type}
                  />
                );
              })}
        </div>
        <div className="container-change-page-view-all">
          <input
            inputMode="numeric"
            value={inputPage}
            onChange={(e) => setInputPage(e.target.value)}
            onKeyDown={handleInputPage}
            ref={inputPageRef}
          />
          <span>
            {page} of{" "}
            {type === "movie"
              ? resultsMovie?.total_pages
              : resultsTv.total_pages}
          </span>
          <button onClick={() => handleChangePage(Number(page) - 1)}>
            <img src="/image/icon/left-arrow.png" />
          </button>
          <button onClick={() => handleChangePage(Number(page) + 1)}>
            <img src="/image/icon/right-arrow.png" />
          </button>
        </div>
      </div>
    </>
  );
}
