import React, { useState } from "react";
import PitStop from "./PitStop";
import "./RaceTrack.css";

const RaceTrack = () => {
  const [pitStops, setPitStops] = useState([
    { id: 1, lap: 100, type: "tyres", time: 10 },
    { id: 2, lap: 300, type: "fuel", time: 15 },
    { id: 3, lap: 500, type: "driver", time: 20 },
  ]);

  const handleDragStop = (e, d, id) => {
    const updatedPitStops = pitStops.map((pitStop) =>
      pitStop.id === id ? { ...pitStop, lap: d.x } : pitStop
    );
    setPitStops(updatedPitStops);
  };

  return (
    <div className="race-track">
      <div className="track-line" />
      {pitStops.map((pitStop) => (
        <PitStop
          key={pitStop.id}
          pitStop={pitStop}
          onDragStop={handleDragStop}
        />
      ))}
    </div>
  );
};

export default RaceTrack;
