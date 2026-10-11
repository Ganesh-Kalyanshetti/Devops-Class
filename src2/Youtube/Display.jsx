import React, { useState } from "react";
import vedio from './vedio.json';
import Container from "./Container";

function Display() 
{
    let [vid,setVid] = useState(vedio)
    let [play,setPlay] = useState(null)
    
    let handleplay=(el)=>
    {
        setPlay(el)
    }
    return (

        <div>
            <Container vl={vid} vp={play} hp={handleplay}></Container>
        </div>
    )
}

export default Display;