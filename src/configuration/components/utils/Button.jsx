import React, {useContext} from "react"
import { Button } from "@mui/material"
import { CounterContext } from './../../../contexts/counter.context'
import { StatsContext } from "./../../../contexts/stats.context"
import { TypeContext } from "../../../contexts/type.context"

const MyButton = ({type, child}) =>{
    const {setProgressive, setCounterCopy, setCounter, setRestCounterCopy, setRestCounter, setCounterActive, setActualCount, setCounterRest} = useContext(CounterContext);
    let {time, restTime, timeP , slider, setTimeP, setTime, setRestTime, setChecked, setSlider, setTimes} = useContext(StatsContext);
    const {setOpen} = useContext(TypeContext);

    const handleClick = (e) =>{
        let counterSet;
        let restCounterSet;

        if (type === 'classic'){
          if (time && restTime){
            counterSet = time*60;
            restCounterSet = restTime*60;
          }
        }

        if (type === 'progressive'){
          let pomTime = timeP;
          pomTime *= 3600;
          let reducer = 1;
          if (pomTime < 10000){
            setTimes(3);
            reducer = 3;
          }else {
            setTimes(5);
            reducer = 5;
          }
          const productiveTime = pomTime*(slider / 100);
          const restTimeP =  pomTime - productiveTime;
          counterSet = (productiveTime / reducer) - (reducer*100);
          restCounterSet = (restTimeP / reducer) + (reducer*100/2);
          setProgressive(true);
        }

        setOpen(false);
        setCounterActive(true);
        setCounter(counterSet);
        setCounterCopy(counterSet);
        setRestCounter(restCounterSet);
        setRestCounterCopy(restCounterSet);
        setActualCount(1);

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