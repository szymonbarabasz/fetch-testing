import React from "react";
import ReactDOM from "react-dom";
import MovieFetch from "./app/movieRatings/movieRatings";
import MZKFetch from "./app/MZKTimeTable/MZKTimeTable";
import "./styles/index.css";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <MovieFetch />
        <MZKFetch />
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
