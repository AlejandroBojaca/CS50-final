import React, {createContext, useState} from "react"

export const CounterContext = createContext({
    counter: null,
    restCounter: null,
    counterActive: false,
    setCounter: () => null,
    setRestCounter: () => null,
    setCounterActive: () => null
});

export const CounterProvider = ({children}) => {
    const [counter, setCounter] = useState(null);
    const [restCounter, setRestCounter] = useState(null);
    const [counterActive, setCounterActive] = useState(false);

    const value = {counter, setCounter, restCounter, setRestCounter, counterActive, setCounterActive};
    return (
        <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
    )
}
