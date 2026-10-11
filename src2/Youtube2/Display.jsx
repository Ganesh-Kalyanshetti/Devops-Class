import React, { useState } from "react";
import videolist from './vedio.json'
import Container from "./Container";

function Display()
{   
    let [vl,setvl] = useState(videolist)
    let [vp,setvp] = useState(videolist[0])

    let handleplay=(e)=>{

        setvp(e)

    }
    
    return(
        <div>
            <Container vl={vl} vp={vp} hp={handleplay}></Container>    

        </div>
    )

}

export default Display