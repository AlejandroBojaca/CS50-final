import React, {useContext} from "react";
import { Button } from "@mui/material";
import { CounterContext } from './../../../contexts/counter.context';
import { StatsContext } from "./../../../contexts/stats.context";
import { TypeContext } from "../../../contexts/type.context";

const MyButton = ({type, child}) =>{
    const {counter, restCounter, counterActive, setCounter, setRestCounter, setCounterActive} = useContext(CounterContext);
    const {time, restTime, timeP, checked, slider, setTimeP, setTime, setRestTime, setChecked, setSlider} = useContext(StatsContext);
    const {open, setOpen} = useContext(TypeContext);

    const handleClick = (e) =>{

        if (type === 'classic'){
          if (time, restTime){
            setCounter(time);
            setRestCounter(restTime);
            // setOpen(false);
          }
        }

        if (type === 'progressive'){

        }
        setCounterActive(true);
        setTime(null);
        setTimeP(null);
        setRestTime(null);
        setChecked(false);
        setSlider(null);
    }

    return (
        <Button
          variant="outlined"
          onClick={(e)=>handleClick(e)}
        >
          {child}
        </Button>
      )
}

export default MyButton;