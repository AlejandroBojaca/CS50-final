import React, {useContext} from "react";
import { TextField, InputAdornment } from "@mui/material";
import {StatsContext} from './../../../contexts/stats.context'

const Input = ({inputField, timeType}) =>{
    const {time, times, restTime, setTime, setRestTime, timeP, setTimeP, setTimes} = useContext(StatsContext);
    
    const handleChange = (e) =>{
        const input = e.target.value;
        if(!isNaN(input)){
            if (inputField === 'total-progressive-time' && input < 100){
                setTimeP(input)
            }
            if (inputField === 'time-per-session' && input < 1000){
                setTime(input)
            }
            if (inputField === 'rest-time' && input < 100){
                setRestTime(input)
            }
            if (inputField === 'repetitions' && input < 100){
                setTimes(input)
            }
        }
    }

    const field = inputField === 'time-per-session' ? time || '': inputField === 'rest-time' ? restTime || '' : inputField === 'total-progressive-time' ? timeP || '' : times;
    return (
        <TextField
            value={field}
            onChange={(e)=>handleChange(e)}
            style={{marginRight:-10}}
            id="outlined-start-adornment"
            sx={{ m: 1, width: "102px" }}
            InputProps={{
                endAdornment: <InputAdornment position="start">{timeType}</InputAdornment>
            }}
        />
    )
}

export default Input;