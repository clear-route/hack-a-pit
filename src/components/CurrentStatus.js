import React from 'react';
import { Box, Typography } from '@mui/material';

const CurrentStatus = ({currentStatus}) => {

  return (
    <Box
      sx={{
        padding: 2,
        border: '1px solid #ccc',
        borderRadius: 2,
        marginBottom: 2,
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Box sx={{ flex: 1, marginRight: 1 }}>
        <Typography variant="h6">Track Overview</Typography>
        {currentStatus && (
          <Box>
            <Typography variant="body2">Lap: {currentStatus.lap}</Typography>
            <Typography variant="body2">Track Temp: {currentStatus.trackTemperature}°C</Typography>
          </Box>
        )}
      </Box>
      <Box sx={{ flex: 1, marginLeft: 1 }}>
        {currentStatus && (
          <Box>
            <Typography variant="h6">Car Overview
            </Typography>

            <Typography variant="body2">Fuel Remaining: {currentStatus.fuelRemaining}%</Typography>
            <Typography variant="body2">Tire Health: {currentStatus.tireWear}%</Typography>
            <Typography variant="body2">Engine Temperature: {currentStatus.engineTemperature}%</Typography>
            <Typography variant="body2">Average Miles Per Gallon: {currentStatus.milesPerGallon}</Typography>

            {currentStatus.shouldPitStop && (
              <Typography variant="body2" color="error">
                Should Pit Stop: Yes
              </Typography>
            )}
          </Box>
        )}
      </Box>
      <Box sx={{ flex: 1, marginLeft: 1 }}>
        {currentStatus && (
          <Box>
            <Typography variant="h6">Driver Overview</Typography>

            <Typography variant="body2">Driver Stint Minutes: {currentStatus.stintMinutes}</Typography>
            <Typography variant="body2">Driver Tiredness : {currentStatus.driverTiredness}%</Typography>
            {currentStatus.shouldPitStop && (
              <Typography variant="body2" color="error">
                Should Pit Stop: Yes
              </Typography>
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default CurrentStatus;