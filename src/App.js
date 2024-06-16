import React, { useState, useEffect, useRef } from 'react';
import RaceTrack from "./components/RaceTrack";
import { ThemeProvider, createTheme, CssBaseline, Box, Container, Typography } from "@mui/material";
import "./App.css";
import CurrentStatus from "./components/CurrentStatus";
import PitStopGraph from './components/PitStopGraph';
import data from "./data/data";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#ff4081",
    },
  },
  typography: {
    h1: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      color: "#ffffff",
    },
  },
});

const calculateTime = (startTime, endTime) => {
  const now = new Date();
  const remainingTimeMs = endTime - now;
  const timeThroughMs = now - startTime;

  const remainingTime = {
    hours: Math.floor((remainingTimeMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((remainingTimeMs % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((remainingTimeMs % (1000 * 60)) / 1000),
  };

  const timeThrough = Math.floor(timeThroughMs / (1000 * 60));

  return { remainingTime, timeThrough };
};

function App() {
  const now = new Date();
  const raceStartTime = useRef(new Date(now.getTime() - 30 * 60 * 1000)); // 30 minutes ago
  const raceEndTime = useRef(new Date(raceStartTime.current.getTime() + 24 * 60 * 60 * 1000)); // 24 hours from start time

  const [currentTime, setCurrentTime] = useState(new Date());
  const [remainingTime, setRemainingTime] = useState({ hours: 24, minutes: 0, seconds: 0 });
  const [timeThrough, setTimeThrough] = useState(0);

  useEffect(() => {
    const updateClockAndTime = () => {
      const now = new Date();
      setCurrentTime(now);

      const { remainingTime, timeThrough } = calculateTime(raceStartTime.current, raceEndTime.current);
      setRemainingTime(remainingTime);
      setTimeThrough(timeThrough);
    };

    updateClockAndTime();

    const interval = setInterval(updateClockAndTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 2,
          }}
        >
          <Typography variant="h4" gutterBottom>
            Pit Ops
          </Typography>
          <Typography variant="h6" gutterBottom>
            Current Time: {currentTime.toLocaleTimeString()}
          </Typography>
          <Typography variant="h6" gutterBottom>
            Remaining Time: {remainingTime.hours}h {remainingTime.minutes}m {remainingTime.seconds}s
          </Typography>
          <Typography variant="h6" gutterBottom>
            Time Through: {timeThrough} minutes
          </Typography>
        </Box>

        <Typography variant="h5" gutterBottom>
          Race Snapshot
        </Typography>

        <CurrentStatus currentStatus={data[`${String(currentTime.getHours()).padStart(2, '0')}:${String(currentTime.getMinutes()).padStart(2, '0')}`]} />
        <Typography variant="h5" gutterBottom>
          Pit Stopping In
        </Typography>
        <RaceTrack pitStopTimes={data} />

        <PitStopGraph currentTime={currentTime} pitStopTimes={data} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
