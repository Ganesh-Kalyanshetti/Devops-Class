import React, { Fragment } from "react";
import './Styleee/VedioList.css'

function VedioList(props) {

    return (
        <div>
            <div className="video-card" onClick={() => props.hp(props.el)}>


                    <img src={props.el.thumbnailUrl} alt="" height={150} className="each-Video" />

                <div className="video-details">
                    <h4>{props.el.title}</h4>
                    <h6>{props.el.author}</h6>
                    
                </div>

            </div>
        </div>
    )
}
export default VedioList