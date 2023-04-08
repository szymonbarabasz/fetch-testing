import React from "react";

function Search({
  handleChange,
}: {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}): JSX.Element {
  return (
    <input className="moviesinput" type="search" onChange={handleChange} />
  );
}

export default Search;
