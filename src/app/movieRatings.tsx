import React, { useState, useEffect } from "react";
import "./index.scss";

function Search(props) {
  return (
    <input
      className="moviesinput"
      type="search"
      onChange={props.handleChange}
    />
  );
}

function Ratings(props) {
  let ratingsArr = [];
  if (!props.ratings || props.ratings.length === 0) {
    ratingsArr.push(<div key={0}>Brak innych ocen</div>);
  } else {
    for (let i = 0; i < props.ratings.length; i++) {
      ratingsArr.push(
        <div key={i}>
          Ocena {props.ratings[i].Source}: {props.ratings[i].Value}
        </div>
      );
    }
  }
  return ratingsArr;
}

function ScrollButton() {
  function handleClick() {
    window.scroll({
      top: document.body.offsetHeight,
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

export default function MovieFetch() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState("The Room");

  function handleChange(e) {
    setTitle(e.target.value);
  }

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?t=${title}&apikey=63e8f48b`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(false);
          setError(error);
        }
      );
  }, [title]);

  if (error) {
    return (
      <h1 style={{ fontStyle: 150 }} className="error">
        Error! {error.message}
      </h1>
    );
  } else if (!isLoaded) {
    return (
      <div className="movies">
        <div className="header skeleton" />
        <div className="moviestableSkeleton">
          <div className="skeleton-text skeleton" />
          <div className="skeleton-text skeleton" />
          <div className="skeleton-text skeleton" />
          <div className="skeleton-text skeleton" />
          <div className="skeleton-text skeleton" />
          <div className="skeleton-text skeleton" />
          <div className="skeleton-text skeleton" />
          <div className="skeleton-text skeleton" />
          <div className="skeleton-text skeleton" />
        </div>
      </div>
    );
  } else {
    return (
      <div className="moviesfetch">
        <div className="movies">
          <div className="header">
            <h2 className="title">Tabela z danymi nt. filmów</h2>
            <h3 className="subtitle">wpisz tytuł filmu:</h3>
          </div>
          <Search handleChange={handleChange} />
          <div className="moviestable">
            <div>Tytuł: {items.Title}</div>
            <div>Aktorzy: {items.Actors}</div>
            <div>Reżyser: {items.Director}</div>
            <div>Gatunek: {items.Genre}</div>
            <div>Rok produkcji: {items.Year}</div>
            <div>Ocena imdb: {items.imdbRating}</div>
            <div>Ocena metascore: {items.Metascore}</div>
            <Ratings ratings={items.Ratings} />
            <div>Data wydania: {items.Released}</div>
          </div>
        </div>
        <ScrollButton />
      </div>
    );
  }
}
