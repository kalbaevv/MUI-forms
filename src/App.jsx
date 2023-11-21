import { useForm } from "react-hook-form";

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
import { formControlClasses } from "@mui/joy";

function App() {
  const [inputValue, setInputValue] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleInputChange = (event) => {
    const inputValue = event.target.value;

    if (inputValue.length <= 200) {
      setInputValue(inputValue);
    }
  };

  const onSubmit = (data, event) => {
    console.log(data, "data");
    alert(data);
    event.prevent.default();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "5rem",
        }}>
        <Box>
          <Typography sx={{ color: "#929da3", fontWeight: 700 }}>
            Name
          </Typography>
          <TextField
            sx={{ width: 300, marginBottom: "1rem" }}
            maxLength={3}
            id='outlined-basic'
            variant='outlined'
            placeholder='your name'
            {...register("name", {
              required: true,
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters",
              },
              maxLength: 20,
            })}
          />
          {errors.name && (
            <Typography sx={{ color: "#B00210" }}>
              {errors.name.message}
            </Typography>
          )}
        </Box>

        <Box sx={{ marginBottom: "1rem" }}>
          <Typography sx={{ color: "#929da3", fontWeight: 700 }}>
            Password
          </Typography>
          <TextField
            sx={{ width: 300 }}
            maxLength={3}
            id='outlined-basic'
            variant='outlined'
            placeholder='your password'
            type='password'
            readonly
            {...register("password", {
              required: "**Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
              pattern: {
                value: /^(?=.*[A-Z])(?=.*\d).{2,}$/,
                message: "Invalid email address",
              },
            })}
            aria-invalid={errors.password ? "true" : "false"}
          />
          {errors.password && (
            <Typography sx={{ color: "#B00210" }}>
              {errors.password.message}
            </Typography>
          )}
        </Box>

        <Box>
          <Typography sx={{ color: "#929da3", fontWeight: 700 }}>
            Email
          </Typography>
          <TextField
            sx={{ width: 300, marginBottom: "1rem" }}
            id='outlined-basic'
            variant='outlined'
            placeholder='your email'
            autocomplete='off'
            type='email'
            {...register("email", {
              required: true,
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email",
              },
            })}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <AlternateEmailIcon />
                </InputAdornment>
              ),
            }}
          />
          {errors.email && (
            <Typography sx={{ color: "#B00210" }}>
              {errors.email.message}
            </Typography>
          )}
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
              <FormControlLabel
                value='other'
                control={<Radio />}
                label='Other'
              />
            </Box>
          </RadioGroup>
        </Box>
        <Box>
          <Button
            sx={{ width: 300, height: 50, backgroundColor: "#847aff" }}
            variant='contained'
            type='submit'>
            Submit
          </Button>
        </Box>
      </Box>
    </form>
  );
}

export default App;
