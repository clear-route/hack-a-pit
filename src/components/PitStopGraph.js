import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import annotationPlugin from "chartjs-plugin-annotation";
import { Box } from "@mui/material";

Chart.register(...registerables, annotationPlugin);

const PitStopGraph = ({ pitStopTimes, currentTime }) => {
  const times = Object.keys(pitStopTimes);
  const labels = times.map((time) => time);

  const trackTemperatureData = times.map(
    (time) => pitStopTimes[time].trackTemperature
  );
  const fuelRemainingData = times.map(
    (time) => pitStopTimes[time].fuelRemaining
  );
  const tireWearData = times.map((time) => pitStopTimes[time].tireWear);
  const engineTemperatureData = times.map(
    (time) => pitStopTimes[time].engineTemperature
  );
  const driverTirednessData1 = times.map(
    (time) => pitStopTimes[time].driver1.tiredness
  );
  const driverTirednessData2 = times.map(
    (time) => pitStopTimes[time].driver2.tiredness
  );
  const driverTirednessData3 = times.map(
    (time) => pitStopTimes[time].driver3.tiredness
  );

  const chartData = {
    labels,
    datasets: [
      {
        label: "Track Temperature (°C)",
        data: trackTemperatureData,
        borderColor: "red",
        fill: false,
      },
      {
        label: "Fuel Remaining (%)",
        data: fuelRemainingData,
        borderColor: "brown",
        fill: false,
      },
      {
        label: "Tire Wear (%)",
        data: tireWearData,
        borderColor: "orange",
        fill: false,
      },
      {
        label: "Engine Temperature (°C)",
        data: engineTemperatureData,
        borderColor: "purple",
        fill: false,
      },
      {
        label: "Driver 1 Tiredness (%)",
        data: driverTirednessData1,
        borderColor: "blue",
        fill: false,
      },
      {
        label: "Driver 2 Tiredness (%)",
        data: driverTirednessData2,
        borderColor: "yellow",
        fill: false,
      },
      {
        label: "Driver 3 Tiredness (%)",
        data: driverTirednessData3,
        borderColor: "pink",
        fill: false,
      },
    ],
  };

  const currentTimeString = `${String(currentTime.getHours()).padStart(
    2,
    "0"
  )}:${String(currentTime.getMinutes()).padStart(2, "0")}`;
  const annotations = [
    {
      type: "line",
      mode: "vertical",
      scaleID: "x",
      value: currentTimeString,
      borderColor: "black",
      borderWidth: 2,
      label: {
        display: true,
        content: "Elapsed Time",
        enabled: true,
        position: "start",
        backgroundColor: "black", // Adjust background color for readability
        yAdjust: -0, // Position label above the chart area
        z: 1000,
        opacity: 1.0,
        height: 10,
      },
    },
    ...Object.keys(pitStopTimes)
      .filter((time) => pitStopTimes[time].shouldPitStop)
      .map((time) => ({
        type: "line",
        mode: "vertical",
        scaleID: "x",
        value: time,
        borderColor: "green",
        borderWidth: 2,
        label: {
          content: [
            "Pit Stop Recommended",
            "- Refuel",
            "- Change Tires",
            "- Change Drivers",
          ],
          enabled: true,
          display: true,
          position: "start",
          backgroundColor: "green", // Adjust background color for readability
          yAdjust: -0, // Position label above the chart area
          z: 1000,
          opacity: 1.0,
          height: 10,
        },
      })),
    {
      type: "box",
      xMin: labels[0],
      xMax: currentTimeString,
      backgroundColor: "rgba(211, 211, 211, 0.5)",
    },
    ...times
      .map((time, index) => {
        const previousTime = index > 0 ? times[index - 1] : null;
        if (
          previousTime &&
          (pitStopTimes[time].driver1.stintMinutes <
            pitStopTimes[previousTime].driver1.stintMinutes ||
            pitStopTimes[time].driver2.stintMinutes <
              pitStopTimes[previousTime].driver2.stintMinutes ||
            pitStopTimes[time].driver3.stintMinutes <
              pitStopTimes[previousTime].driver3.stintMinutes)
        ) {
          return {
            type: "line",
            mode: "vertical",
            scaleID: "x",
            value: time,
            borderColor: "blue",
            borderWidth: 2,
            label: {
              content: "Driver Change",
              enabled: true,
              position: "start",
              backgroundColor: "rgba(0, 0, 255, 0.8)",
              yAdjust: -20,
            },
          };
        }
        return null;
      })
      .filter((annotation) => annotation !== null),
  ];

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: "Time",
        },
      },
      y: {
        title: {
          display: true,
          text: "Value",
        },
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "bottom", // Position the legend below the graph
      },
      annotation: {
        annotations,
        drawTime: "afterDatasetsDraw",
      },
    },
  };

  return (
    <Box
      sx={{
        display: "flex",
        overflowX: "scroll",
        padding: 2,
        border: "1px solid #ccc",
        borderRadius: 2,
        marginX: 0,
        paddingY: 5,
      }}
    >
      <Line data={chartData} options={options} />
    </Box>
  );
};

export default PitStopGraph;
