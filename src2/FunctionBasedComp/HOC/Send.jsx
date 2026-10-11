import React, { useState } from "react";
import A1 from "./A1";
import A2 from "./A2";
import "./Send.css"

function Send() 
{
    let [change,setChange] = useState(false);

    let handleC = () => {

        setChange(!change)
    }

    
    return (
        <div>

            <div className="Design">

                <A1 bgcolor={change ? "red" : "black"} ></A1>
                <A2 bgcolor={change ? "red" : "black"} ></A2>

            </div>

            <div  style={{display:"flex" ,justifyContent:"space-evenly"}}>

            <button onClick={handleC}>Click Here To change Color</button>
            </div>

        </div>
    )
}

export default Send
