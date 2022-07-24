import React, {useContext} from "react"
import { Button } from "@mui/material"
import { CounterContext } from './../../../contexts/counter.context'
import { StatsContext } from "./../../../contexts/stats.context"
import { TypeContext } from "../../../contexts/type.context"

const MyButton = ({type, child}) =>{
    const {counter, restCounter, counterActive, setCounter, setRestCounter, setCounterActive, setActualCount, setCounterRest} = useContext(CounterContext);
    let {time, restTime, timeP, checked, slider, times, setTimeP, setTime, setRestTime, setChecked, setSlider, setTimes} = useContext(StatsContext);
    const {open, setOpen} = useContext(TypeContext);

    const handleClick = (e) =>{

        if (type === 'classic'){
          if (time && restTime){
            setCounter(time*60);
            setRestCounter(restTime*60);
            setOpen(false);
            setCounterActive(true);
          }
        }

        if (type === 'progressive'){
          let pomTime = timeP;
          pomTime *= 3600;
          let reducer = 1;
          if (pomTime < 10000){
            setTimes(3);
            reducer = 300;
          }else {
            setTimes(5);
            reducer = 500;
          }
          const productiveTime = pomTime*(slider / 100);
          const restTimeP =  pomTime - productiveTime;
          pomTime = (productiveTime / 3) - reducer;
          const pomRestTime = (restTimeP / 3) + (reducer/2);
          setCounterActive(true);
          setCounter(pomTime);
          setRestCounter(pomRestTime);
          setActualCount(0);
        }
        setTime(null);
        setTimeP(null);
        setRestTime(null);
        setChecked(false);
        setCounterRest(true);
        setSlider(null);
    }

    return (
        <Button
          variant="outlined"
          onClick={(e)=>handleClick(e)}>
          {child}
        </Button>
      )
}

export default MyButton;