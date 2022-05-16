import React, { useState, useEffect } from "react";
import "./index.scss";

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

export default function MZKFetch() {
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
    return (
      setLine(target.split(" ")[0]),
      setDirection(target.slice(2, target.length))
    );
  }

  function handleStop(e) {
    const target = e.target.value;
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
    return (
      <h1 style={{ fontStyle: 150 }} className="error">
        Error! {error.message}
      </h1>
    );
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
