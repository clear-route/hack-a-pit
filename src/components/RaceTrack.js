import React, { useState } from "react";
import PitStop from "./PitStop";
import {
  Box,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import "../css/RaceTrack.css";

const RaceTrack = () => {
  const [pitStops, setPitStops] = useState([
    { id: 1, lap: 4, type: "tyres", time: 10, avgLapTime: 120 },
    { id: 2, lap: 8, type: "fuel", time: 15, avgLapTime: 125 },
    { id: 3, lap: 12, type: "driver", time: 20, avgLapTime: 130 },
  ]);

  const handleDragStop = (e, d, id) => {
    const updatedPitStops = pitStops.map((pitStop) =>
      pitStop.id === id ? { ...pitStop, lap: (d.x / trackWidth) * 24 } : pitStop
    );
    setPitStops(updatedPitStops);
  };

  const trackWidth = 800; // Width of the track in pixels

  return (
    <Paper elevation={3} className="race-track">
      <Box className="track-line" />
      {Array.from({ length: 25 }, (_, i) => (
        <Typography
          key={i}
          className="track-time"
          style={{ left: `${(i / 25) * 100}%` }}
        >
          {i}:00
        </Typography>
      ))}
      {pitStops.map((pitStop) => (
        <PitStop
          key={pitStop.id}
          pitStop={pitStop}
          onDragStop={handleDragStop}
          trackWidth={trackWidth}
        />
      ))}
      <Box className="key-table">
        <Typography variant="h6">Race Strategy Summary</Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                {/* <TableCell>Metric</TableCell>
                <TableCell>Value</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                {/* <TableCell>Total Laps</TableCell>
                <TableCell>{pitStops[pitStops.length - 1]?.lap || 0}</TableCell> */}
              </TableRow>
              <TableRow>
                {/* <TableCell>Total Fuel Used</TableCell>
                <TableCell>
                  {pitStops.reduce((sum, pitStop) => sum + pitStop.time, 0)}{" "}
                  liters
                </TableCell> */}
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Paper>
  );
};

export default RaceTrack;
