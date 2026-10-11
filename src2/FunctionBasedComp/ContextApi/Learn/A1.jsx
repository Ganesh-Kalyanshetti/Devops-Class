import React from "react";
import { CA } from "./Context";

function A1()
{
    return(
        <div>
                <CA.Consumer>
                    {(i)=>{
                            
                            console.log(i);
                            return(
                                <div></div>
                            )
                    }}
                </CA.Consumer>
        </div>
    )
}
export default A1;