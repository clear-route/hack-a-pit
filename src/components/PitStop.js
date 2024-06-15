import React from "react";
import { Rnd } from "react-rnd";
import { Box, Typography } from "@mui/material";
import "../css/PitStop.css";

const PitStop = ({ pitStop, onDragStop }) => {
  return (
    <Rnd
      bounds="parent"
      position={{ x: pitStop.lap, y: 150 }}
      onDragStop={(e, d) => onDragStop(e, d, pitStop.id)}
      enableResizing={false}
      dragAxis="x"
    >
      <Box
        className="pit-stop"
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          padding: 1,
          borderRadius: 1,
        }}
      >
        <Typography variant="body2" className="pit-stop-type">
          {pitStop.type}
        </Typography>
        <Typography variant="caption" className="pit-stop-time">
          {pitStop.time} mins
        </Typography>
      </Box>
    </Rnd>
  );
};

export default PitStop;
