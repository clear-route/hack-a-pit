import React from "react";
import { Rnd } from "react-rnd";
import "./PitStop.css";

const PitStop = ({ pitStop, onDragStop }) => {
  return (
    <Rnd
      bounds="parent"
      position={{ x: pitStop.lap, y: 0 }}
      onDragStop={(e, d) => onDragStop(e, d, pitStop.id)}
      enableResizing={false}
      dragAxis="x"
    >
      <div className="pit-stop">
        <span className="pit-stop-type">{pitStop.type}</span>
        <span className="pit-stop-time">{pitStop.time} mins</span>
      </div>
    </Rnd>
  );
};

export default PitStop;
