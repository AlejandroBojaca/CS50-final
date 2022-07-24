import React, {useContext, useEffect} from "react";
import { CounterContext } from "../../../contexts/counter.context";
import { StatsContext } from "../../../contexts/stats.context";
import styled from 'styled-components'

const Background = styled.div`
    background-color: red;
    height: 100vh;
    width:  100vw;
    display: flex;
    gap:10px;
    justify-content: center;
    align-items: center;
    color: white;
    font-size:20px;
`

const Counter = () => {
    const {counter, restCounter, setCounter, setRestCounter, actualCount, setActualCount, counterRest, setCounterRest} = useContext(CounterContext);
    const {times} = useContext(StatsContext);
    const actualTimer = counterRest ? counter : restCounter;
    let hoursCounter = Math.max(Math.floor(actualTimer / 3600), 0);
    let minutesCounter = Math.max(Math.floor((actualTimer - hoursCounter*3600) / 60), 0);
    let secondsCounter = Math.max(Math.floor((actualTimer - hoursCounter*3600 - minutesCounter*60)), 0);

    const updateTimer = (count)=>{
        console.log(count);
        setTimeout(()=>{
            if(count > 0){
                counterRest ? setCounter(count-1) : setRestCounter(count-1);
            }
        },100)
    }

    useEffect(() =>{
        counterRest ? updateTimer(counter) : updateTimer(restCounter);
        if (counter === 1){
            setCounterRest(!counterRest)
        }  
    },[counter, restCounter])

    return(
        <Background>
            <div style={{border:'solid', padding: '5px 15px', borderRadius: 5}}> 
                {hoursCounter > 9 ? hoursCounter : `0${hoursCounter}`} : {minutesCounter > 9 ? minutesCounter : `0${minutesCounter}`} : {secondsCounter > 9 ? secondsCounter : `0${secondsCounter}`}
            </div>
            {times && <h4 style={{marginBottom: 4}}>1/{times}</h4>}
        </Background>
    )
}

export default Counter;
