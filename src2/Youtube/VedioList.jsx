import React from "react";


function VedioList(props) {

    return (

        <div>
            <div onClick={()=>props.hp(props.el.videoUrl)}>

                <img src={props.el.thumbnailUrl} height={200} alt="" />
                
            </div>
        </div>
    )
}

export default VedioList;