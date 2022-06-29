import React from 'react'
import { Slider, Typography } from '@material-ui/core';
import { useStyles } from './rangeSlider.style';

function RangeSlider(props) {
  const { defaultLabel, handleOpacityChange } = props;
  const classes  = useStyles();

  const handleRangeChange = (value) => {
    handleOpacityChange && handleOpacityChange(value)
  }

  return (
        <>
            <Slider
                className={classes.slider}
                orientation="vertical"
                min={0.1}
                max={1}
                step={0.1}
                valueLabelDisplay="auto"
                getAriaValueText={handleRangeChange}
                defaultValue={1}
                aria-labelledby="range-slider"
            />
            <Typography  className={classes.opacity} component="p">{defaultLabel}</Typography>
        </>
       
  )
}
export default RangeSlider;