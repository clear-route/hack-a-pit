import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const PitStopGraph = ({pitStopTimes} ) => {
  const labels = Array.from({ length: 24 }, (_, i) => `${i}:00`);

  const filteredPitStopTimes = Object.keys(pitStopTimes).filter(time => pitStopTimes[time].shouldPitStop);

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Pit Stop Times',
        data: Array(24).fill(0),
        borderColor: 'transparent', // Make the dataset line transparent
        borderWidth: 3,
        pointRadius: 0,
        fill: true,
        stepped: true,
      },
    ],
  };

  const annotations = filteredPitStopTimes.map(time => {
    const [hour, minute] = time.split(':').map(Number);
    const value = hour + (minute / 60);

    // console.log(hour, hour)
    return {
      type: 'line',
      mode: 'vertical',
      scaleID: 'x',
      value,
      borderColor: 'red',
      borderWidth: 2,
      label: {
        content: 'Pit Stop',
        enabled: true,
        position: 'top'
      }
    };
  });

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time (Hours)',
        },
      },
      y: {
        ticks: {
          display: false,
        },
        title: {
          display: true,
          text: 'Pit Stops',
        },
        beginAtZero: true,
        max: 1,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      annotation: {
        annotations,
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default PitStopGraph;
