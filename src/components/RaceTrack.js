import React, { useState, useRef, useEffect} from "react";
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
    Grid,
    Tooltip
} from "@mui/material";

import data from "../data/data"
import "../css/RaceTrack.css";


const RaceTrack = () => {
    const currentTime = new Date();
    const timeKey = `${currentTime.getHours().toString().padStart(2, '0')}:${currentTime.getMinutes().toString().padStart(2, '0')}`;
    const refs = useRef([]);
    const timestamps = Object.keys(data)
    const index = timestamps.findIndex((time) => time === timeKey);

    useEffect(() => {
        if (refs.current[index]) {
            refs.current[index].scrollIntoView({
                behavior: 'smooth',
                inline: 'start',
            });
        }
    }, [refs, index]);
    return (
        <Box
            sx={{
                display: 'flex',
                overflowX: 'scroll',
                padding: 2,
                border: '1px solid #ccc',
                borderRadius: 2,
                marginX: 2, // This ensures equal margin on both sides
                paddingY: 1, // Padding to ensure content does not touch the borders
            }}
        >
            <Grid container spacing={2} sx={{ overflowX: 'auto', flexWrap: 'nowrap' }}>
                {Object.keys(data).map((time, index) => (
                    <Grid item key={index} ref={ref => refs.current[index] = ref}>
                        <Tooltip
                            title={
                                <Box>
                                    <Typography variant="body2">Lap: {data[time].lap}</Typography>
                                    <Typography variant="body2">Track Temp: {data[time].trackTemperature}°C</Typography>
                                    <Typography variant="body2">Stint Minutes: {data[time].stintMinutes}</Typography>
                                    <Typography variant="body2">Fuel Remaining: {data[time].fuelRemaining}%</Typography>
                                    <Typography variant="body2">Tire Wear: {data[time].tireWear}%</Typography>
                                    <Typography variant="body2">Engine Temprature: {data[time].engineTemperature}%</Typography>
                                    <Typography variant="body2">Fuel Weight: {data[time].fuelWeight}%</Typography>
                                    <Typography variant="body2">Driver Tiredness: {data[time].driverTiredness}%</Typography>

                                    {data[time].shouldPitStop && (
                                        <Typography variant="body2" color="error">
                                            Should Pit Stop: Yes
                                        </Typography>
                                    )}
                                </Box>
                            }
                        >
                            <Box
                                sx={{
                                    minWidth: 150,
                                    height: 120,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: '1px solid #000',
                                    borderRadius: 1,
                                    backgroundColor: data[time].shouldPitStop ? 'red' : 'green',
                                    color: '#fff',
                                    padding: 1,
                                    cursor: 'pointer',
                                    textAlign: 'center',
                                }}
                            >
                                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>{time}</Typography>
                                <Typography variant="body2">Lap: {data[time].lap}</Typography>
                                {data[time].shouldPitStop && (
                                    <Typography variant="body2" color="warn">
                                        Should Pit Stop
                                    </Typography>
                                )}
                                {data[time].reason && (
                                    <Typography variant="body2" color="warn">
                                        {data[time].reason}
                                    </Typography>
                                )}
                                {/* <Typography variant="body2">Temp: {data[time].trackTemperature}°C</Typography>
                <Typography variant="body2">Stint: {data[time].stintMinutes} mins</Typography>
                <Typography variant="body2">Fuel: {data[time].fuelRemaining}%</Typography>
                <Typography variant="body2">Tire Wear: {data[time].tireWear}%</Typography>  */}
                            </Box>
                        </Tooltip>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default RaceTrack;

