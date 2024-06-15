import React, { useState, useEffect } from 'react';
import RaceTrack from "./components/RaceTrack";
import { ThemeProvider, createTheme, CssBaseline, Box } from "@mui/material";
import { Container, Typography } from "@mui/material";
import "./App.css";
import CurrentStatus from "./components/CurrentStatus";

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

function App() {
  const [currentTime, setCurrentTime] = useState('');
  const [currentStatus, setCurrentStatus] = useState({});

  const handleTimeHover = (time) => {
    setCurrentTime(time);
  };

  // Update the real-time clock
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString());
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
          Time: {currentTime}
        </Typography>
      </Box>
      <CurrentStatus/>
      <RaceTrack />
    </Container>
    </ThemeProvider>
  );
}

export default App;
