import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';

Chart.register(...registerables, annotationPlugin);

const PitStopGraph = ({ pitStopTimes, currentTime }) => {
  const times = Object.keys(pitStopTimes);
  const labels = times.map(time => time);

  const trackTemperatureData = times.map(time => pitStopTimes[time].trackTemperature);
  const fuelRemainingData = times.map(time => pitStopTimes[time].fuelRemaining);
  const tireWearData = times.map(time => pitStopTimes[time].tireWear);
  const engineTemperatureData = times.map(time => pitStopTimes[time].engineTemperature);
  const driverTirednessData = times.map(time => pitStopTimes[time].driverTiredness);

  const chartData = {
    labels,
    datasets: [

      {
        label: 'Track Temperature (°C)',
        data: trackTemperatureData,
        borderColor: 'red',
        fill: false,
      },
      {
        label: 'Fuel Remaining (%)',
        data: fuelRemainingData,
        borderColor: 'green',
        fill: false,
      },
      {
        label: 'Tire Wear (%)',
        data: tireWearData,
        borderColor: 'orange',
        fill: false,
      },
      {
        label: 'Engine Temperature (°C)',
        data: engineTemperatureData,
        borderColor: 'purple',
        fill: false,
      },
      {
        label: 'Driver Tiredness (%)',
        data: driverTirednessData,
        borderColor: 'pink',
        fill: false,
      },
    ],
  };

  const currentTimeString = `${String(currentTime.getHours()).padStart(2, '0')}:${String(currentTime.getMinutes()).padStart(2, '0')}`;
  const annotations = [
    {
      type: 'line',
      mode: 'vertical',
      scaleID: 'x',
      value: currentTimeString,
      borderColor: 'black',
      borderWidth: 2,
      label: {
        content: 'Now',
        enabled: true,
        position: 'start',
        backgroundColor: 'rgba(0, 0, 255, 0.8)', // Adjust background color for readability
        // yAdjust: -20, // Position label above the chart area
      },
    },
    ...Object.keys(pitStopTimes)
      .filter(time => pitStopTimes[time].shouldPitStop)
      .map(time => ({
        type: 'line',
        mode: 'vertical',
        scaleID: 'x',
        value: time,
        borderColor: 'red',
        borderWidth: 2,
        label: {
          content: 'Pit Stop',
          enabled: true,
          position: 'start',
          backgroundColor: 'rgba(255, 0, 0, 0.8)', // Adjust background color for readability
          yAdjust: -20, // Position label above the chart area
        },
      })),
    {
      type: 'box',
      xMin: labels[0],
      xMax: currentTimeString,
      backgroundColor: 'rgba(211, 211, 211, 0.5)', // Light grey shading for actual data
    },
  ];

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Value',
        },
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
      annotation: {
        annotations,
        drawTime: 'afterDatasetsDraw', // Ensures annotations are drawn after the datasets
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default PitStopGraph;
