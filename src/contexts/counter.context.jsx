import React, {createContext, useState} from "react"

export const CounterContext = createContext({
    counter: null,
    restCounter: null,
    counterActive: false,
    actualCount : null,
    counterRest: null ,
    setCounter: () => null,
    setRestCounter: () => null,
    setCounterActive: () => null,
    setActualCount : () => null,
    setCounterRest: () => null,
});

export const CounterProvider = ({children}) => {
    const [counter, setCounter] = useState(null);
    const [restCounter, setRestCounter] = useState(null);
    const [counterActive, setCounterActive] = useState(false);
    const [actualCount, setActualCount] = useState(null);
    const [counterRest, setCounterRest] = useState(null);

    const value = {counter, setCounter, restCounter, setRestCounter, counterActive, setCounterActive, actualCount, setActualCount, counterRest, setCounterRest};
    return (
        <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
    )
}
