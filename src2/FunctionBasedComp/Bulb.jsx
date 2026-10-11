import React, { useState } from "react";
import onbulb from  '../Images/OnBulb.png'
import offbulb from  '../Images/OffBulb.png'

function Bulb ()
{
    let [bulb,setbulb] = useState(onbulb);
    let [count,setcount] = useState(0);

    let handlebtn= ()=>
    {
        if(bulb == onbulb)
        {
            setbulb(offbulb)
        }
        else
        {
            setbulb(onbulb)
        }
    }

    let handleincremnt=()=>{

        setcount(count+1)
    }
    let handledecrement=()=>{
        setcount(count-1)
    }
    return(
        <div>
            <h2>Hello From Functions</h2>
            <img src={bulb} alt="" width={200} height={200} />
            <h3>{count}</h3>
            <br />  <br />
            <button onClick={handlebtn}>{ bulb == onbulb ? "Off" : "On"}</button> <br /> <br />
            <button onClick={handleincremnt}>Increment</button> <br /> <br />
            <button onClick={handledecrement}>Decrement</button>



        </div>
    )
    
}
export default Bulb;
