import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Search(props) {
  return (
    <input
      className="moviesinput"
      type="search"
      onChange={props.handleChange}
    />
  );
}
// const title = prompt("Wpisz tytuł filmu który szukasz po angielsku");

//sposób na robienie loopów i if-ów w react
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

function ScrollButton(props) {
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

function MovieFetch() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState("The Room");

  function handleChange(e) {
    setTitle(e.target.value);
  }
  //dobrze jest zrobić fetch-a w componentDidMount po renderze (tutaj useEffect)
  //ponieważ odpali to wszystko po renderze właśnie
  useEffect(() => {
    fetch(`https://www.omdbapi.com/?t=${title}&apikey=63e8f48b`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        // authorization: 'no-scam',
        //   'Access-Control-Allow-Origin': '*',
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setIsLoaded(true);
          setItems(result);
          console.log(result.Ratings);
        },
        (error) => {
          setIsLoaded(false);
          setError(error);
        }
      );
  }, [title]);

  if (error) {
    return <h1 style={{ fontStyle: 150 }} className="error">Error! {error.message}</h1>;
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

function BusSelect(props) {
  const busArr = [];

  if (props.stop === "58") {
    busArr.push(
      <select
        className="busSelect"
        onChange={props.handleChange}
        key={props.stop}
      >
        <option value="3 Sienna / Leśna" key="3">
          3 Sienna / Leśna
        </option>
        <option value="8 Żywiec Pętla MZK" key="8">
          8 Żywiec Pętla MZK
        </option>
      </select>
    );
  } else if (props.stop === "647") {
    busArr.push(
      <select
        className="busSelect"
        onChange={props.handleChange}
        key={props.stop}
      >
        <option value="1 Świnna, Przyłęków, Pewel Ślemieńska" key="1">
          1 Świnna, Przyłęków, Pewel Ślemieńska
        </option>
        <option value="2 Trzebinia" key="2">
          2 Trzebinia
        </option>
        <option value="3 Żywiec ul. Sporyska" key="3">
          3 Żywiec ul.Sporyska
        </option>
        <option value="5 Żywiec Fabryka Śrub" key="5">
          5 Żywiec Fabryka Śrub
        </option>
        <option value="8 Rychwałdek, Pewel Ślemieńska" key="8">
          8 Rychwałdek, Pewel Ślemieńska
        </option>
        <option value="10 Kocurów pętla" key="10">
          10 Kocurów pętla
        </option>
        <option value="12 Żywiec Kocurów" key="12">
          12 Żywiec Kocurów
        </option>
        <option value="13 Przyłęków" key="13">
          13 Przyłęków
        </option>
        <option value="15 Żywiec Spółdzielnia, Kocurów" key="15">
          15 Żywiec Spółdzielnia, Kocurów
        </option>
      </select>
    );
  } else if (props.stop === "548") {
    busArr.push(
      <select
        className="busSelect"
        onChange={props.handleChange}
        key={props.stop}
      >
        <option value="1 Żywiec Os. Zgoda" key="1">
          1 Żywiec Os. Zgoda
        </option>
        <option value="2 Żywiec Pętla MZK" key="2">
          2 Żywiec Pętla MZK
        </option>
        <option value="5 Radziechowy, Przybędza" key="5">
          5 Radziechowy, Przybędza
        </option>
        <option value="10 Juszczyna" key="10">
          10 Juszczyna
        </option>
        <option value="12 Żywiec Pętla MZK, Dz. Przemysłowa" key="12">
          12 Żywiec Pętla MZK, Dz. Przemysłowa
        </option>
        <option value="13 Żywiec Pętla MZK, Os. Kochanowskiego" key="13">
          13 Żywiec Pętla MZK, Os. Kochanowskiego
        </option>
        <option value="15 Brzuśnik" key="15">
          15 Brzuśnik
        </option>
      </select>
    );
  }

  return busArr;
}

function MZKFetch() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [items, setItems] = useState([]);
  const [line, setLine] = useState("3");
  const [direction, setDirection] = useState("Sienna / Leśna");
  const [stop, setStop] = useState("58");
  const formData = new FormData();
  formData.append("kierunek", direction);
  formData.append("linia", line);
  formData.append("przystanek", stop);

  function handleChange(e) {
    const target = e.target.value;
    console.log(target);
    return (
      setLine(target.split(" ")[0]),
      setDirection(target.slice(2, target.length))
    );
  }

  function handleStop(e) {
    const target = e.target.value;
    console.log(target);
    console.log(e.target.nextSibling.value);
    return (
      setStop(target),
      setTimeout(() => {
        setDirection(
          e.target.nextSibling.value.slice(2, e.target.nextSibling.value.length)
        );
      }, 0),
      setTimeout(() => {
        setLine(e.target.nextSibling.value.split(" ")[0]);
      }, 0)
    );
  }

  useEffect(() => {
    fetch("https://limitless-everglades-89814.herokuapp.com/mzk", {
      method: "POST",
      headers: {
        Accept: "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        authorization: "no-scam",
        "Access-Control-Allow-Origin": "*",
      },
      //aby wysyłać dane, musimy je przekazać do body
      body: formData,
    })
      .then((res) => res.text())
      .then(
        (res) => {
          setIsLoaded(true);
          setItems(res);
        },
        (error) => {
          setIsLoaded(false);
          setError(error);
        }
      );
  });

  if (error) {
    return <h1 style={{ fontStyle: 150 }} className="error">Error! {error.message}</h1>;
  } else if (!isLoaded) {
    return (
      <div className="zywiectable">
        <div className="header skeleton" />
        <div className="timetableSkeleton skeleton" />
        <div className="legendSkeleton skeleton" />
      </div>
    );
  } else {
    return (
      //dangerouslySetInnerHTML - zamienia text w html
      <div className="MZKfetch">
        <div className="zywiectable">
          <div className="header">
            <h2 className="title">Tabela rozkładu jazdy MZK Żywiec</h2>
            <h3 className="subtitle">wybierz przystanek i linię:</h3>
          </div>
          <select className="stopSelect" onChange={handleStop}>
            <option value="58" key="58">
              Jubileuszowa
            </option>
            <option value="647" key="647">
              Dworzec
            </option>
            <option value="548" key="548">
              Piłsudskiego II
            </option>
          </select>
          <BusSelect
            handleChange={handleChange}
            stop={stop}
            direction={setDirection}
            line={setLine}
          />
          <div
            className="timetable"
            dangerouslySetInnerHTML={{ __html: items }}
          ></div>
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <MovieFetch className="moviefetch" />
        <MZKFetch className="MZKfetch" />
      </React.Fragment>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
