import React, { useContext, useState } from "react";
import { ContextTheme } from "./ContextTheme";

function Container() {


    let getcolor = useContext(ContextTheme);

    let [color, setColor] = useState(getcolor.light.bc)

    let handleColor = () => {

        let cc = document.getElementById("cc");

        if (color === getcolor.light.bc) 
        {      
            cc.style.backgroundColor = getcolor.dark.bc;
            setColor(getcolor.dark.bc);         
        }
        else 
        {
            cc.style.backgroundColor = getcolor.light.bc;
            setColor(getcolor.light.bc);        
        }

    }

    return (
        <div>

            <div id="cc" style={{ height: "200px", width: "200px", border: "1px solid black", backgroundColor: color }}> </div> <br />
            <button onClick={handleColor}> Color </button>

        </div>
    )
}

export default Container;