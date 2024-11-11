import React, { useState } from "react";
import "./tool_tip.css";

function Tooltip(props) {
  const [visible, setVisible] = useState(false);
  const { position } = props;

  const handleOnMouseEnter = () => {
    setVisible(true);
  };
  const handleOnMouseOut = () => {
    setVisible(false);
  };

  return (
    <div className="tooltip-container">
      {visible && (
        <div className={`tooltip tooltip-${position}`}>
          Thanks for Hovering !!
        </div>
      )}
      <button onMouseEnter={handleOnMouseEnter} onMouseOut={handleOnMouseOut}>
        Hover me !!
      </button>
    </div>
  );
}

export default Tooltip;
