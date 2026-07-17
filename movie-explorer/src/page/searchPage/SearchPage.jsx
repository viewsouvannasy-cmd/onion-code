import { useSearchParams, useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import { HeaderSection } from "../../components/Header/HeaderSection";
import { HeaderSearch } from "./headerSearch/HeaderSearch";
import { ResultsSearchSection } from "./resultsSearchSection/ResultsSearchSection";
import { FooterSection } from "./../../components/Footer/FooterSection";

export function SearchPage() {
  const [searchParams] = useSearchParams();
  const queryValue = searchParams.get("query");

  const { type, page } = useParams();

  const [resultsMovie, setResultsMovie] = useState({});
  const [resultsTv, setResultsTv] = useState({});

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSearchResults = async () => {
      const urlMovie = `https://api.themoviedb.org/3/search/movie?api_key=cb8d9a517e7387524c6cd936f1752bc0&query=${encodeURIComponent(queryValue)}&page=${page}`;
      const urlTv = `https://api.themoviedb.org/3/search/tv?api_key=cb8d9a517e7387524c6cd936f1752bc0&query=${encodeURIComponent(queryValue)})}&page=${page}`;

      let responseMovie = await axios.get(urlMovie);
      let responseTv = await axios.get(urlTv);

      setResultsMovie(responseMovie.data);
      setResultsTv(responseTv.data);
      setIsLoading(false);
    };

    fetchSearchResults();
  }, [queryValue, page, type]);

  useEffect(() => {
    document.title = `Onion - ${queryValue}`;
  }, [queryValue]);

  return (
    <>
      <HeaderSection />

      <HeaderSearch
        resultsMovie={resultsMovie}
        resultsTv={resultsTv}
        queryValue={queryValue}
        setIsLoading={setIsLoading}
        type={type}
      />
      <ResultsSearchSection
        resultsMovie={resultsMovie}
        resultsTv={resultsTv}
        isLoading={isLoading}
        type={type}
        page={page}
        queryValue={queryValue}
        setIsLoading={setIsLoading}
      />
      <FooterSection />
    </>
  );
}
