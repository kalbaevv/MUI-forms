import {
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Checkbox,
  Box,
  Button,
} from "@mui/material";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import Textarea from "@mui/joy/Textarea";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    const inputValue = event.target.value;

    if (inputValue.length <= 200) {
      setInputValue(inputValue);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}>
      <Box>
        <Typography sx={{ color: "#929da3", fontWeight: 700 }}>
          Input Field
        </Typography>
        <TextField
          sx={{ width: 300, marginBottom: "1rem" }}
          maxLength={3}
          id='outlined-basic'
          variant='outlined'
          placeholder='your name'
        />
      </Box>

      <Box>
        <Typography sx={{ color: "#929da3", fontWeight: 700 }}>
          Input Field
        </Typography>
        <TextField
          sx={{ width: 300, marginBottom: "1rem" }}
          id='outlined-basic'
          variant='outlined'
          placeholder='your email'
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <AlternateEmailIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <Box>
        <Typography sx={{ color: "#929da3", fontWeight: 700 }}>
          Select Fields
        </Typography>
        <FormControl sx={{ width: 300, marginBottom: "1rem" }}>
          <InputLabel id='demo-simple-select-label'>select</InputLabel>
          <Select id='demo-simple-select' label='Age'>
            <MenuItem value={10}>please</MenuItem>
            <MenuItem value={20}>select</MenuItem>
            <MenuItem value={30}>something</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box sx={{ marginBottom: "1rem" }}>
        <Typography sx={{ color: "#929da3", fontWeight: 700 }}>
          Checkbox Fields
        </Typography>
        <FormControlLabel control={<Checkbox />} label='label 1' />
        <FormControlLabel control={<Checkbox />} label='label 2' />
        <FormControlLabel control={<Checkbox />} label='label 3' />
      </Box>

      <Box>
        <Typography sx={{ color: "#929da3", fontWeight: 700 }}>
          Text area
        </Typography>
        <Textarea
          sx={{ width: "300px", marginBottom: "1rem" }}
          value={inputValue}
          onChange={handleInputChange}
          minRows={3}
          required
          id='required'
          placeholder='text area'
        />
      </Box>

      <Box>
        <FormLabel id='demo-radio-buttons-group-label'>Gender</FormLabel>
        <RadioGroup
          aria-labelledby='demo-radio-buttons-group-label'
          defaultValue='female'
          name='radio-buttons-group'>
          <Box>
            <FormControlLabel
              value='female'
              control={<Radio />}
              label='Female'
            />
            <FormControlLabel value='male' control={<Radio />} label='Male' />
            <FormControlLabel value='other' control={<Radio />} label='Other' />
          </Box>
        </RadioGroup>
      </Box>
      <Box>
        <Button
          sx={{ width: 300, height: 50, backgroundColor: "#847aff" }}
          variant='contained'>
          Submit
        </Button>
      </Box>
    </Box>
  );
}

export default App;
