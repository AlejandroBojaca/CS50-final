import React, {createContext, useState} from "react";

export const TypeContext = createContext({
    type : null,
    setType : () => null,
    open: false,
    setOpen: () => null
    
});

export const TypeProvider = ({children}) => {
    const [type, setType] = useState(null)
    const [open, setOpen] = useState(false)

    const value = {type, setType, open, setOpen}
    return (
        <TypeContext.Provider value={value}>{children}</TypeContext.Provider>
    )
}
