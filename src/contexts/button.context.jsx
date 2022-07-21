import React, {createContext, useState} from "react";

export const ButtonContext = createContext({
    open : false,
    changeOpen : () => null
});

export const ButtonProvider = ({children}) => {
    const [open, setOpen] = useState(false)

    const value = {open, setOpen}
    return (
        <ButtonContext.Provider value={value}>{children}</ButtonContext.Provider>
    )
}
