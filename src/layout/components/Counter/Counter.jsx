import React, {useContext, useEffect} from "react";
import { CounterContext } from "../../../contexts/counter.context";
import { StatsContext } from "../../../contexts/stats.context";
import styled from 'styled-components'

const Background = styled.div`
    background-color: ${props => props.color};
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
    const {counter, counterCopy, restCounterCopy, restCounter, progressive, setCounterCopy, setRestCounterCopy, setCounter, setRestCounter, actualCount, setActualCount, counterRest, setCounterRest} = useContext(CounterContext);
    const {times} = useContext(StatsContext);
    const coefficientProgressive = progressive ? times : 0;
    const actualTimer = counterRest ? counter : restCounter;
    let hoursCounter = Math.max(Math.floor(actualTimer / 3600), 0);
    let minutesCounter = Math.max(Math.floor((actualTimer - hoursCounter*3600) / 60), 0);
    let secondsCounter = Math.max(Math.floor((actualTimer - hoursCounter*3600 - minutesCounter*60)), 0);
    const color = counterRest ? 'mediumseagreen' : 'indianred'

    const updateTimer = (count)=>{
        setTimeout(()=>{ 
            if (count > 0){
                if (count === 1){
                    counterRest ? setCounter(count-1) : setRestCounter(count-1);
                    if (Number(actualCount) !== Number(times)){
                        counterRest ? setCounter(counterCopy + (coefficientProgressive*100)) : setRestCounter(Math.max(restCounterCopy - (coefficientProgressive*100/2), 30));
                        setCounterRest(!counterRest);
                        !counterRest && setActualCount(actualCount + 1);
                        setCounterCopy(counter);
                        setRestCounterCopy(restCounter)
                    }
                } else{
                    counterRest ? setCounter(count-1) : setRestCounter(count-1);
                }
            }
        },1000)
    }

    useEffect(() =>{
        counterRest ? updateTimer(counter) : updateTimer(restCounter); 
    },[counter, restCounter])

    return(
        <Background color={color}>
            <div style={{border:'solid', padding: '5px 15px', borderRadius: 5}}> 
                {hoursCounter > 9 ? hoursCounter : `0${hoursCounter}`} : {minutesCounter > 9 ? minutesCounter : `0${minutesCounter}`} : {secondsCounter > 9 ? secondsCounter : `0${secondsCounter}`}
            </div>
            {times && <h4 style={{marginBottom: 4}}>{actualCount}/{times}</h4>}
        </Background>
    )
}

export default Counter;
