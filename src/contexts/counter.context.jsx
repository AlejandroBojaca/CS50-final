import React, {createContext, useState} from "react"

export const CounterContext = createContext({
    counter: null,
    counterCopy: null,
    restCounter: null,
    restCounterCopy: null,
    counterActive: false,
    actualCount : null,
    counterRest: null,
    progressive: false,
    setCounter: () => null,
    setCounterCopy: () => null,
    setRestCounter: () => null,
    setRestCounterCopy: () => null,
    setCounterActive: () => null,
    setActualCount : () => null,
    setCounterRest: () => null,
});

export const CounterProvider = ({children}) => {
    const [counter, setCounter] = useState(null);
    const [counterCopy, setCounterCopy] = useState(null);
    const [restCounter, setRestCounter] = useState(null);
    const [counterActive, setCounterActive] = useState(false);
    const [actualCount, setActualCount] = useState(null);
    const [counterRest, setCounterRest] = useState(null);
    const [restCounterCopy, setRestCounterCopy] = useState(null);
    const [progressive, setProgressive] = useState(false);

    const value = {counter, counterCopy, restCounterCopy, progressive, setProgressive, setRestCounterCopy, setCounterCopy, setCounter, restCounter, setRestCounter, counterActive, setCounterActive, actualCount, setActualCount, counterRest, setCounterRest};
    return (
        <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
    )
}
