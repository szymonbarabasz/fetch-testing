import React, { useState, useEffect } from "react";
import "../styles/index.css";

function BusSelect(props: {
  stop: string;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}): JSX.Element {
  const JublieuszowaStopDirectionsArray = [
    { direction: "Sienna / Leśna", busNumber: "3" },
    { direction: "Żywiec Pętla MZK", busNumber: "8" },
  ];
  const DworzecStopDirectionArray = [
    { direction: "Świnna, Przyłęków, Pewel Ślemieńska", busNumber: "1" },
    { direction: "Trzebinia", busNumber: "2" },
    { direction: "Żywiec ul. Sporyska", busNumber: "3" },
    { direction: "Żywiec Fabryka Śrub", busNumber: "5" },
    { direction: "Rychwałdek, Pewel Ślemieńska", busNumber: "8" },
    { direction: "Kocurów pętla", busNumber: "10" },
    { direction: "Żywiec Kocurów", busNumber: "12" },
    { direction: "Przyłęków", busNumber: "13" },
    { direction: "Żywiec Spółdzielnia, Kocurów", busNumber: "15" },
  ];
  const PilsudskiegoStopDirectionArray = [
    { direction: "Żywiec Os. Zgoda", busNumber: "1" },
    { direction: "Żywiec Pętla MZK", busNumber: "2" },
    { direction: "Radziechowy, Przybędza", busNumber: "5" },
    { direction: "Juszczyna", busNumber: "10" },
    { direction: "Żywiec Pętla MZK, Dz. Przemysłowa", busNumber: "12" },
    { direction: "Żywiec Pętla MZK, Os. Kochanowskiego", busNumber: "13" },
    { direction: "Brzuśnik", busNumber: "15" },
  ];

  const directionsMap = (
    BusStopArray: {
      direction: string;
      busNumber: string;
    }[]
  ) => {
    return BusStopArray.map((el) => {
      return (
        <option value={`${el.busNumber} ${el.direction}`} key={el.busNumber}>
          {el.busNumber} {el.direction}
        </option>
      );
    });
  };

  function stopCheck() {
    if (props.stop === "58") {
      return (
        <select
          className="busSelect"
          onChange={props.handleChange}
          key={props.stop}
        >
          {directionsMap(JublieuszowaStopDirectionsArray)}
        </select>
      );
    } else if (props.stop === "647") {
      return (
        <select
          className="busSelect"
          onChange={props.handleChange}
          key={props.stop}
        >
          {directionsMap(DworzecStopDirectionArray)}
        </select>
      );
    } else if (props.stop === "548") {
      return (
        <select
          className="busSelect"
          onChange={props.handleChange}
          key={props.stop}
        >
          {directionsMap(PilsudskiegoStopDirectionArray)}
        </select>
      );
    } else {
      return <></>;
    }
  }
  return stopCheck();
}

export default function MZKFetch(): JSX.Element {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [items, setItems] = useState("");
  const [line, setLine] = useState("3");
  const [direction, setDirection] = useState("Sienna / Leśna");
  const [stop, setStop] = useState("58");
  const formData = new FormData();
  formData.append("kierunek", direction);
  formData.append("linia", line);
  formData.append("przystanek", stop);

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const target = e.target.value;
    setDirection(target.slice(2, target.length));
    setLine(target.split(" ")[0]);
  }

  function handleStop(e: React.ChangeEvent<HTMLSelectElement>) {
    const target = e.target;
    setStop(target.value);
  }

  useEffect(() => {
    const target = document.querySelector(".stopSelect");
    let direction;
    let line;

    direction = target?.nextSibling?.firstChild?.textContent;
    line = target?.nextSibling?.firstChild?.textContent;
    if (typeof direction === "string" && typeof line === "string") {
      setDirection(direction.slice(2, direction.length));
      setLine(line.split(" ")[0]);
    }
  }, [stop]);

  useEffect(() => {
    const abortControl = new AbortController();

    fetch("https://mzk-cors-proxy.onrender.com/mzk", {
      method: "POST",
      headers: {
        Accept: "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        authorization: "no-scam",
        "Access-Control-Allow-Origin": "*",
      },
      body: formData,
      signal: abortControl.signal,
    })
      .then((res) => res.text())
      .then(
        (res) => {
          setIsLoaded(true);
          setItems(res);
        },
        (error) => {
          if (error.name !== "AbortError") {
            setIsLoaded(false);
            setError(error);
          }
        }
      );

    return () => abortControl.abort();
  });

  const errorAndLoadingCheck = () => {
    if (error) {
      return (
        <h1 style={{ fontStyle: "150" }} className="error">
          Error! {error}
        </h1>
      );
    } else if (!isLoaded) {
      return (
        <div className="zywiectable">
          <div className="headerSkeleton skeleton" />
          <div className="timetableSkeleton skeleton" />
          <div className="legendSkeleton skeleton" />
        </div>
      );
    } else {
      return (
        <div className="zywiectable">
          <div className="header">
            <h2 className="title">Tabela rozkładu jazdy MZK Żywiec</h2>
            <h3 className="subtitle">wybierz przystanek i linię:</h3>
          </div>
          <div className="selectors">
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
            <BusSelect handleChange={handleChange} stop={stop} />
          </div>
          <div
            className="timetable"
            dangerouslySetInnerHTML={{ __html: items }}
          ></div>
        </div>
      );
    }
  };

  return <div className="MZKfetch">{errorAndLoadingCheck()}</div>;
}
