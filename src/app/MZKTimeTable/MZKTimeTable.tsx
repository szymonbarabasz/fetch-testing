import React, { useState, useEffect } from "react";
import mzkAPIFetchService from "./services/MZKAPIFetchService";
import BusSelect from "./components/BusSelect/BusSelect";
import "../../styles/index.css";

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

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const target = e.target.value;
    setDirection(target.slice(2, target.length));
    setLine(target.split(" ")[0]);
  };

  const handleStop = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const target = e.target;
    setStop(target.value);
  };

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

    mzkAPIFetchService(formData, abortControl).then(
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

  const stopOptions = (
    <select className="stopSelect" onChange={handleStop}>
      <option value="58" key="58">
        Jubileuszowa
      </option>
      <option value="647" key="647">
        Dworzec
      </option>
      <option value="548" key="548">
        Piłsudskiego II
      </option>{" "}
    </select>
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
            {stopOptions}
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
