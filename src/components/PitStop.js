import React, { useState, useEffect } from "react";
import { Rnd } from "react-rnd";
import { Box, Typography } from "@mui/material";
import "../css/PitStop.css";

const PitStop = ({ pitStop, onDragStop, trackWidth }) => {
  const [hover, setHover] = useState(false);
  const [show, setShow] = useState(false);
  let hoverTimeout;

  const calculateTime = (lap) => {
    const hours = Math.floor(lap);
    const minutes = Math.floor((lap - hours) * 60);
    return `${hours}:${minutes < 10 ? "0" : ""}${minutes}`;
  };

  const handleMouseEnter = () => {
    clearTimeout(hoverTimeout);
    setHover(true);
    setShow(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
    hoverTimeout = setTimeout(() => setShow(false), 1000);
  };

  useEffect(() => {
    return () => clearTimeout(hoverTimeout);
  }, []);

  return (
    <Rnd
      bounds="parent"
      position={{ x: (pitStop.lap / 24) * trackWidth, y: 200 }}
      onDragStop={(e, d) => onDragStop(e, d, pitStop.id)}
      enableResizing={false}
      dragAxis="x"
      className="pit-stop-container"
    >
      <Box
        className="pit-stop-hover-area"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Box className="pit-stop-line" />
        <Box
          className={`pit-stop ${show ? "show" : ""} ${hover ? "hover" : ""}`}
        >
          <Typography variant="body2" className="pit-stop-type">
            {pitStop.type}
          </Typography>
          <Typography variant="caption" className="pit-stop-time">
            {pitStop.time} mins
          </Typography>
          <Typography variant="caption" className="avg-lap-time">
            Avg Lap: {pitStop.avgLapTime} secs
          </Typography>
          <Typography variant="caption" className="pit-stop-time">
            {calculateTime(pitStop.lap)}
          </Typography>
        </Box>
      </Box>
    </Rnd>
  );
};

export default PitStop;
