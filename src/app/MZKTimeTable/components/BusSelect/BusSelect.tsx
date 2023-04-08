import React from "react";
import { MZKDataModel } from "../../data/MZKDataModel";

interface BusSelectProps {
  stop: string;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

function BusSelect({ stop, handleChange }: BusSelectProps): JSX.Element {
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
    if (stop === "58") {
      return (
        <select className="busSelect" onChange={handleChange} key={stop}>
          {directionsMap(MZKDataModel.JublieuszowaStopDirectionsArray)}
        </select>
      );
    } else if (stop === "647") {
      return (
        <select className="busSelect" onChange={handleChange} key={stop}>
          {directionsMap(MZKDataModel.DworzecStopDirectionArray)}
        </select>
      );
    } else if (stop === "548") {
      return (
        <select className="busSelect" onChange={handleChange} key={stop}>
          {directionsMap(MZKDataModel.PilsudskiegoStopDirectionArray)}
        </select>
      );
    }
    return <></>;
  }
  return stopCheck();
}

export default BusSelect;
