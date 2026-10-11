import React from "react";
import { createContext } from "react";

export let ContextTheme = createContext();


let Market = ({ children }) => {


    let theme = {
        light: {
            bc: "blue"
        },
        dark: {
            bc: "black"
        }
    };

    return <ContextTheme.Provider value={theme }>

        {children}
    
    </ContextTheme.Provider>


}

export default Market