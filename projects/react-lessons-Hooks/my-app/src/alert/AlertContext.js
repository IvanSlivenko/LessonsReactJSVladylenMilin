import React from "react";

const AlertContext = React.createContext()

export const AlertProvider = ({children }) => { 
    return (
        <AlertContext.Provider value={ }>
            { children }
        </AlertContext.Provider>
    )
}