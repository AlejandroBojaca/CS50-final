import React, {useContext} from "react";
import { CounterContext } from "../../../contexts/counter.context";
import styled from 'styled-components'

const Background = styled.div`
    background-color: red;
    height: 100vh;
    width:  100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size:20px;
`

const Counter = () => {
    const {counter, restCounter} = useContext(CounterContext);
    const hoursCounter = Math.floor(counter / 60);
    const minutesCounter = Math.floor(((counter / 60) - hoursCounter) * 60);

    const calculateTime = () =>{

    }

    return(
        <Background>
            <div>0{hoursCounter} : {minutesCounter} : 00</div>
        </Background>
    )
}

export default Counter;