import React, { useState, useEffect } from "react";
import "../styles/index.css";

function Search(props: {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}): JSX.Element {
  return (
    <input
      className="moviesinput"
      type="search"
      onChange={props.handleChange}
    />
  );
}

function Ratings(props: {
  ratings: { Source: string; Value: string }[];
}): JSX.Element {
  if (!props.ratings || props.ratings.length === 0) {
    return (
      <div className="singleMovieInfo" key={`rate 0`}>
        Brak innych ocen
      </div>
    );
  } else {
    const ratingsArr = props.ratings.map((el, i) => (
      <div className="singleMovieInfo" key={`rate ${i}`}>
        Ocena {el.Source}: {el.Value}
      </div>
    ));
    return <div>{ratingsArr}</div>;
  }
}

function ScrollButton(): JSX.Element {
  function handleClick() {
    window.scroll({
      top: window.screen.availHeight,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <button
      className="scrollButton fas fa-chevron-down"
      onClick={handleClick}
    ></button>
  );
}

interface MovieInfo {
  Title: string;
  Actors: string;
  Director: string;
  Genre: string;
  Year: string;
  imdbRating: string;
  Metascore: string;
  Ratings: { Source: string; Value: string }[];
  Released: string;
}

const MoviesDefaultValue = {
  Title: "",
  Actors: "",
  Director: "",
  Genre: "",
  Year: "",
  imdbRating: "",
  Metascore: "",
  Ratings: [{ Source: "", Value: "" }],
  Released: "",
};

export default function MovieFetch(): JSX.Element {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [items, setItems] = useState<MovieInfo>(MoviesDefaultValue);
  const [title, setTitle] = useState("The Room");
  const movieInfoArr = [
    { label: "Tytuł", path: items.Title },
    { label: "Aktorzy", path: items.Actors },
    { label: "Reżyser", path: items.Director },
    { label: "Gatunek", path: items.Genre },
    { label: "Rok produkcji", path: items.Year },
    { label: "Ocena imdb", path: items.imdbRating },
    { label: "Ocena metascore", path: items.Metascore },
    { label: "Ratings", path: items.Ratings },
    { label: "Data wydania", path: items.Released },
  ];

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTitle(e.target.value);
  }

  useEffect(() => {
    const abortControl = new AbortController();

    fetch(`https://www.omdbapi.com/?t=${title}&apikey=63e8f48b`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
      signal: abortControl.signal,
    })
      .then((res) => res.json())
      .then(
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
