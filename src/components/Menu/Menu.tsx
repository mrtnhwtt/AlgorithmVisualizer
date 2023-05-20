import { useHandleSort } from "../../hooks/useHandleSort";
import { useState } from "react";
import "./Menu.css";
import IconButton from "@mui/material/IconButton";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import Button from "@mui/material/Button";
import Slider from "@mui/material/Slider";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { setMethod, setSpeed, setArray, SortMethod } from '../../context/rootSlice';
import { createUnsortedArray } from "../../utils/utils";

const Menu: React.FC = () => {
  const dispatch = useDispatch();
  const initialSortMethod: string = useSelector((state: RootState) => state.root.method);
  const handleSort = useHandleSort();
  const [sortMethod, setSortMethod] = useState(initialSortMethod);
  const [sliderSpeed, setSliderSpeed] = useState(500);
  const [arraySize, setArraySize] = useState(100);
  const isSorting: boolean = useSelector((state: RootState) => state.root.sorting);

  const handleChange = (event: SelectChangeEvent) => {
    setSortMethod(event.target.value as string);
    dispatch(setMethod(event.target.value as SortMethod));

  };
  const handleSpeedSliderChange = (_event: Event, newValue: number | number[]) => {
    setSliderSpeed(newValue as number);
    const transformedSpeed = 501 - (newValue as number);
    dispatch(setSpeed(transformedSpeed));
  };
  const handleArraySizeSliderChange = (_event: Event, newValue: number | number[]) => {
    setArraySize(newValue as number);
    dispatch(setArray(createUnsortedArray(newValue as number)));
  };
  const handleResetArray = () => {
    dispatch(setArray(createUnsortedArray(arraySize)));
  };

  const SortMethodList = [
    { "value": "bubble", "name": "Bubble Sort" },
    { "value": "selection", "name": "Selection Sort" },
    { "value": "insertion", "name": "Insertion Sort" },
    { "value": "quick", "name": "Quick Sort" },
  ];

  const marks = [
    {
      value: 500,
      label: "Fastest",
    },
    {
      value: 25,
      label: "Slowest",
    },
  ];
  return (
    <div className="menu-container">
      <Box sx={{ width: 250 }}>
        <Button
          disabled={isSorting}
          variant="contained"
          onClick={handleSort}
          size="medium"
          sx={{ width: 250, color: "#eae4d7", backgroundColor: "#282625", "&:hover": { backgroundColor: "#282625" } }}
        >
          {isSorting ? "Sorting..." : "Launch Sort"}
        </Button>
      </Box>
      <Box sx={{ width: 250 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Sort Method</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sortMethod}
            label="Sort Method"
            variant="filled"
            defaultValue={"bubble"}
            onChange={handleChange}
            disabled={isSorting}
            size="small"
          >
            {
              SortMethodList.map((item, index) => {
                return (
                  <MenuItem key={index} value={item.value}>{item.name}</MenuItem>
                )
              })
            }
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ width: 250 }}>
        <Typography id="speed-slider" variant="overline" gutterBottom>
          Speed
        </Typography>
        <Slider
          value={sliderSpeed}
          onChange={handleSpeedSliderChange}
          step={25}
          min={25}
          max={500}
          aria-label="Default"
          valueLabelDisplay="off"
          aria-labelledby="speed-slider"
          marks={marks}
          disabled={isSorting}
          sx={{
            color: "#282625", '& .MuiSlider-thumb': {
              height: 24,
              width: 24,
              border: '2px solid currentColor',
              '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
                boxShadow: 'inherit',
              },
              '&:before': {
                display: 'none',
              },
            },
          }}
        />
      </Box>
      <Box sx={{ width: 250 }}>
        <Typography id="array-size-slider" variant="overline" gutterBottom>
          Array Size
        </Typography>
        <Slider
          value={arraySize}
          onChange={handleArraySizeSliderChange}
          step={5}
          min={25}
          max={200}
          aria-label="Default"
          aria-labelledby="array-size-slider"
          valueLabelDisplay="auto"

          disabled={isSorting}
          sx={{
            color: "#282625", '& .MuiSlider-thumb': {
              height: 24,
              width: 24,
              border: '2px solid currentColor',
              '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
                boxShadow: 'inherit',
              },
              '&:before': {
                display: 'none',
              },
            },
          }}
        />
      </Box>
      <Box sx={{ width: 250 }}>
        <IconButton onClick={handleResetArray} disabled={isSorting} aria-label="reset" size="large" sx={{ color: "#282625" }}>
          <RestartAltIcon fontSize="inherit" />
        </IconButton>
      </Box>
    </div>
  );
};

export default Menu;
