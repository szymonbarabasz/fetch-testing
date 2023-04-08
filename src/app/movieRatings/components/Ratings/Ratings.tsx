import React from "react";

function Ratings({
  ratings,
}: {
  ratings: { Source: string; Value: string }[];
}): JSX.Element {
  if (!ratings || ratings.length === 0) {
    return (
      <div className="singleMovieInfo" key={`rate 0`}>
        Brak innych ocen
      </div>
    );
  } else {
    const ratingsArr = ratings.map((el, i) => (
      <div className="singleMovieInfo" key={`rate ${i}`}>
        Ocena {el.Source}: {el.Value}
      </div>
    ));
    return <div>{ratingsArr}</div>;
  }
}

export default Ratings;
