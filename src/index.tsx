import React from "react";
import ReactDOM from "react-dom";
import MovieFetch from "./app/movieRatings";
import MZKFetch from "./app/MZKTimeTable";

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
