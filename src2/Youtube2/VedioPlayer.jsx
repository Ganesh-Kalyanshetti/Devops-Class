import React, { Fragment } from "react";
import ReactPlayer from "react-player";
import './Styleee/VideoPlayer.css'
import cmtss from './comment.json'

function VedioPlayer(props) {
    console.log(props);

    return (
        <div>
            <div className="VideoSection">

                <ReactPlayer src={props.vp?.videoUrl} controls width="100%" height="450px" />

                <div className="VideoInfo">

                    <div className="vd">
                        <h2>{props.vp?.title}</h2>
                        <h5>{props.vp?.author}</h5>
                    </div>

                    <button>Subscribe</button>
                </div>

            </div>

            <div className="Cmt-Section">
                {
                    cmtss.map((e) => {
                        return (
                            <div className="comment-card" key={e.id}>
                                <h4>{e.user}</h4>
                                <p>{e.comment}</p>
                                <p>{e.likes}</p>
                            </div>
                        );
                    })
                }
            </div>
        
        </div>
    )
}
export default VedioPlayer
