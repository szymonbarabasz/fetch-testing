import React from "react";

function ScrollButton(): JSX.Element {
  const handleClick = () => {
    window.scroll({
      top: window.screen.availHeight,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className="scrollButton fas fa-chevron-down"
      onClick={handleClick}
    ></button>
  );
}

export default ScrollButton;
