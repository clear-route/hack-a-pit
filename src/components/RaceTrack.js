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
  Card,
  CardContent,
} from "@mui/material";

import currentStatus from "../data/data.json"
import "../css/RaceTrack.css";


const TimelineItem = ({ time, data }) => {
  const pitStopStyle = data.shouldPitStop ? { backgroundColor: 'red', color: 'white' } : {};
  return (
    <Card sx={{ minWidth: 200, margin: '0 5px', ...pitStopStyle }}>
      <CardContent>
        <Typography variant="h6">{time}</Typography>
        <Typography variant="body2">Lap: {data.lap}</Typography>
        <Typography variant="body2">Temp: {data.trackTemperature}°C</Typography>
        <Typography variant="body2">Stint: {data.stintMinutes} mins</Typography>
        <Typography variant="body2">Fuel: {data.fuelRemaining}%</Typography>
        <Typography variant="body2">Tire Wear: {data.tireWear}%</Typography>
        {data.shouldPitStop && (
          <Typography variant="body2">Reason: {data.reason}</Typography>
        )}
      </CardContent>
    </Card>
  );
};


const RaceTrack = () => {
  return (
    <Box sx={{ display: 'flex', overflowX: 'scroll' }}>
      {Object.entries(currentStatus).map(([time, data]) => (
        <TimelineItem key={time} time={time} data={data} />
      ))}
    </Box>
  );
};

export default RaceTrack;
