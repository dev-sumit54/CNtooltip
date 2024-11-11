import { useState } from "react";
import "./App.css";

import Tooltip from "./component/Tooltip";
function App() {
  const [direction, setDirection] = useState("top");
  const [selectedDirection, setSelectedDirection] = useState("top");
  const handleOnclick = (direction) => {
    setDirection(direction);
    setSelectedDirection(direction);
  };
  return (
    <>
      <h2>Select direction to hover :: </h2>
      <div className="btn-container">
        <button
          onClick={() => handleOnclick("top")}
          className={selectedDirection === "top" ? "active-button" : ""}
        >
          TOP
        </button>
        <button
          onClick={() => handleOnclick("left")}
          className={selectedDirection === "left" ? "active-button" : ""}
        >
          LEFT
        </button>
        <button
          onClick={() => handleOnclick("right")}
          className={selectedDirection === "right" ? "active-button" : ""}
        >
          RIGHT
        </button>

        <button
          onClick={() => handleOnclick("bottom")}
          className={selectedDirection === "bottom" ? "active-button" : ""}
        >
          BOTTOM
        </button>
      </div>
      <div>
        <Tooltip position={direction}></Tooltip>
      </div>
    </>
  );
}

export default App;
