import React, {createContext, useState} from "react";

export const StatsContext = createContext({
    time: null,
    timeP: null,
    restTime: null,
    checked: false,
    slider: 80,
    times: 0,
    setTime: () => null,
    setTimeP: () => null,
    setRestTime: () => null,
    setChecked: () => null,
    setSlider: () => null,
    setTimes: () => null,
});

export const StatsProvider = ({children}) => {
    const [time, setTime] = useState(null);
    const [times, setTimes] = useState(null);
    const [timeP, setTimeP] = useState(null);
    const [restTime, setRestTime] = useState(null);
    const [checked, setChecked] = useState(false);
    const [slider, setSlider] = useState(80);

    const value = {time, restTime, timeP, checked, slider, times, setTimeP, setTime, setRestTime, setChecked, setSlider, setTimes};
    return (
        <StatsContext.Provider value={value}>{children}</StatsContext.Provider>
    )
}
