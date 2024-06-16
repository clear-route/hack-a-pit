import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const PitStopGraph = ({ pitStopTimes }) => {
  const times = Object.keys(pitStopTimes);
  const labels = times.map(time => time);

  const lapData = times.map(time => pitStopTimes[time].lap);
  const trackTemperatureData = times.map(time => pitStopTimes[time].trackTemperature);
  const fuelRemainingData = times.map(time => pitStopTimes[time].fuelRemaining);
  const tireWearData = times.map(time => pitStopTimes[time].tireWear);
  const engineTemperatureData = times.map(time => pitStopTimes[time].engineTemperature);
  const fuelWeightData = times.map(time => pitStopTimes[time].fuelWeight);
  const driverTirednessData = times.map(time => pitStopTimes[time].driverTiredness);

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Lap',
        data: lapData,
        borderColor: 'blue',
        fill: false,
      },
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
        label: 'Fuel Weight (kg)',
        data: fuelWeightData,
        borderColor: 'brown',
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
    },
  };

  return <Line data={chartData} options={options} />;
};

export default PitStopGraph;
