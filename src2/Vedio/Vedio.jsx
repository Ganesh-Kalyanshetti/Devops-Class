import React, { Component } from "react";
import t from './The_Batman.mp4'

export default class Vedio extends Component
{
    constructor()
    {
        super()
        this.state=
        {
            trailer : t

        }
    }
    handlevideo=()=>{
        
        let v =  document.getElementById("myvedio");

        if(v.paused)
        {
            v.play()
        }
        else{
            v.pause()
        }

    }
    render()
    {
        return(
            <div>
                <h2>Hello</h2>
                <video src={this.state.trailer} style={{ height:"400px"}} autoPlay controls id="myvedio" ></video> <br /> <br />
                <button onClick={this.handlevideo}>Play/Pause</button>
            </div>
        )
    }
}
