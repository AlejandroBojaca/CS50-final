import React, {useContext} from "react";
import { StatsContext } from "../../../contexts/stats.context";

const Counter = () => {
    
    const {time, restTime, timeP, checked, slider} = useContext(StatsContext);
    console.log(time, restTime, timeP, checked, slider);
    return(
        <div>Counter</div>
    )
}

export default Counter;