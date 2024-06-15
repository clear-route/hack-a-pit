import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
  MenuItem,
} from "@material-ui/core";

const PitStopDetails = ({ pitStop, onSave }) => {
  const [details, setDetails] = useState({ ...pitStop });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const handleSave = () => {
    onSave(details);
  };

  return (
    <Dialog open={true} onClose={onSave}>
      <DialogTitle>Edit Pit Stop</DialogTitle>
      <DialogContent>
        <TextField
          label="Lap"
          name="lap"
          value={details.lap}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Type"
          name="type"
          select
          value={details.type}
          onChange={handleChange}
          fullWidth
          margin="normal"
        >
          <MenuItem value="tyres">Tyres</MenuItem>
          <MenuItem value="fuel">Fuel</MenuItem>
          <MenuItem value="driver">Driver</MenuItem>
        </TextField>
        <TextField
          label="Time"
          name="time"
          value={details.time}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSave} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PitStopDetails;
