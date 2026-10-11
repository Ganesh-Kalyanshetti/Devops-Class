import React from "react";
import Hoc from "./Hoc";

function A2(props)
{
    console.log(props);

    return(
        <div>
            
            <div style={{border:"1px solid black", backgroundColor: props.data.bgcolor ,width:"200px",height:"200px"}}></div>


        </div>
    )
}

export default Hoc(A2)