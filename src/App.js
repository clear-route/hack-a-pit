import React from "react";
import RaceTrack from "./components/RaceTrack";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { Container, Typography } from "@mui/material";
import "./App.css";

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
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <header className="App-header">
          <Typography variant="h1" component="h1">
            bogbrush_2024
          </Typography>
        </header>
        <RaceTrack />
      </Container>
    </ThemeProvider>
  );
}

export default App;
