import React, {useContext} from "react";
import { Slider } from "@mui/material";
import {StatsContext} from './../../../contexts/stats.context'

const marks = [
    {
      value: 40,
      label: '40%',
    },
    
    {
      value: 95,
      label: '95% 🔥',
    },
  ];
  
const SliderCustom = () =>{
  const {slider, setSlider} = useContext(StatsContext);
 
  const handleChange = (e) =>{
      const input = e.target.value;
      setSlider(input);
    }

    return (
            <Slider
                onChange={(e)=>handleChange(e)}
                style={{maxWidth:'600px', marginLeft: 20}}
                size="small"
                min={40}
                max={95}
                aria-label="Custom marks"
                defaultValue={slider}
                step={5}
                valueLabelDisplay="auto"
                marks={marks}
            />
    )
}

export default SliderCustom;