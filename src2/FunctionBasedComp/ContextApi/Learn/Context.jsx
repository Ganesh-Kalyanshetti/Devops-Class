import React, { createContext } from "react";
export let CA = createContext()

let Store=({children}) => 
{

    
    return <CA.Provider value={{ Name: "Ganesh", Place: "Bijapur" }}>

        <h2>Hello From Context</h2>
        
        {children}

    </CA.Provider>
}

export default Store;
