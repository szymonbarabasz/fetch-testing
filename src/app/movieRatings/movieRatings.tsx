import React, { useState, useEffect } from "react";
import movieRatingsFetchService from "./services/movieRatingsFetchService";
import {
  MovieInfo,
  MoviesDefaultValue,
  DefaultMovieInfoArr,
} from "./data/movieRatingsDataModel";
import Search from "./components/Search/Search";
import Ratings from "./components/Ratings/Ratings";
import ScrollButton from "./components/ScrollButton/ScrollButton";
import "../../styles/index.css";

export default function MovieFetch(): JSX.Element {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [items, setItems] = useState<MovieInfo>(MoviesDefaultValue);
  const [title, setTitle] = useState("The Room");
  const movieInfoArr = DefaultMovieInfoArr(items);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  useEffect(() => {
    const abortControl = new AbortController();

    movieRatingsFetchService(title, abortControl).then(
      (result) => {
        setIsLoaded(true);
        setItems(result);
      },
      (error) => {
        if (error.name !== "AbortError") {
          setIsLoaded(false);
          setError(error);
        }
      }
    );

    return () => abortControl.abort();
  }, [title]);

  const skeletonRender = movieInfoArr.map((_el, index) => {
    return <div className="skeleton-text skeleton" key={index} />;
  });

  const movieInfoFunction = (
    label: string,
    path:
      | string
      | {
          Source: string;
          Value: string;
        }[]
  ) => {
    return path ? `${label}: ${path}` : `${label}: Brak`;
  };

  const moveInfoArrRender = movieInfoArr.map((el, index) =>
    el.label !== "Ratings" ? (
      <div className="singleMovieInfo" key={index}>
        {movieInfoFunction(el.label, el.path)}
      </div>
    ) : (
      <Ratings ratings={items.Ratings} key={`ratings ${index}`} />
    )
  );

  const errorAndLoadingCheck = () => {
    if (error) {
      return (
        <h1 style={{ fontStyle: "150" }} className="error">
          Error! {error}
        </h1>
      );
    } else if (!isLoaded) {
      return (
        <div className="movies">
          <div className="headerSkeleton skeleton" />
          <div className="inputSkeleton skeleton" />
          <div className="moviestableSkeleton">{skeletonRender}</div>
        </div>
      );
    } else {
      return (
        <div className="movies">
          <div className="header">
            <h2 className="title">Tabela z danymi nt. filmów</h2>
            <h3 className="subtitle">wpisz tytuł filmu:</h3>
          </div>
          <Search handleChange={handleChange} />
          <div className="moviestable">{moveInfoArrRender}</div>
        </div>
      );
    }
  };

  return (
    <div className="moviesfetch">
      {errorAndLoadingCheck()}
      <ScrollButton />
    </div>
  );
}
