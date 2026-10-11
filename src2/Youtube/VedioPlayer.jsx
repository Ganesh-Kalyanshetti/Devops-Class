import React from "react";
import ReactPlayer from "react-player";


function VedioPlayer({ vp }) {

    console.log(vp);
    
    return (
        <div>

            <ReactPlayer src={vp} controls width="75%" height="550px" />
        </div>

    )
}

export default VedioPlayer;