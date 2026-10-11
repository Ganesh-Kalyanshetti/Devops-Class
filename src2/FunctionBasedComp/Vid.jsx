import React, { useState } from "react";
import vedio from '../Vedio/The_Batman.mp4'
let Vid = () =>
{
    let [vd,setvd] = useState(true)

    let handleplay=()=>
    {
        setvd(!vd)
        
        let tag = document.getElementById("tag")

        if(vd)
        {
            tag.play()
        }
        else
        {
            tag.pause()
        }
    }
    return(
        <div>
            <h2>This is Vid Jsx</h2>
            <video id="tag" height={400} src ={vedio}></video> <br />
            <button onClick={handleplay}>Play/Pause</button>
        </div>
    )
}

export default Vid;