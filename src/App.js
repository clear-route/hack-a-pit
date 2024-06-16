import React, { useState, useEffect } from 'react';
import RaceTrack from "./components/RaceTrack";
import { ThemeProvider, createTheme, CssBaseline, Box } from "@mui/material";
import { Container, Typography } from "@mui/material";
import "./App.css";
import CurrentStatus from "./components/CurrentStatus";
import PitStopGraph from './components/PitStopGraph';
import data from "./data/data"

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


const calculateRemainingTime = (endTime) => {
  const now = new Date();
  const timeDiff = endTime - now;
  const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
  return { hours, minutes, seconds };
};


function App() {
  const [currentTime, setCurrentTime] = useState('');

  const [remainingTime, setRemainingTime] = useState({ hours: 24, minutes: 0, seconds: 0 });
  const raceEndTime = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours from now

  // Update the real-time clock
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString());
      setRemainingTime(calculateRemainingTime(raceEndTime));
    };


    const interval = setInterval(updateClock, 1000);
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
            Current Time: {currentTime}
          </Typography>

          <Typography variant="h6" gutterBottom>
            Remaining Time: {remainingTime.hours}h {remainingTime.minutes}m {remainingTime.seconds}s
          </Typography>
        </Box>

        <Typography variant="h5" gutterBottom>
          Race Snapshot
        </Typography>

        <CurrentStatus />
        <Typography variant="h5" gutterBottom>
          Pit Stoppin In
        </Typography>
        <RaceTrack />

        <PitStopGraph pitStopTimes={data} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
