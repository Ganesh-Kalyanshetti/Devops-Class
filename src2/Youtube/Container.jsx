import React from "react";
import VedioPlayer from "./VedioPlayer";
import VedioList from "./VedioList";


function Container({ vl, vp, hp }) {

    
    return (
        <div>
            <article>
                <aside>
                    <VedioPlayer vp={vp} ></VedioPlayer>
                </aside>

                {/* <div>----------------------------------------------------</div> */}

                <aside>
                    
                    {
                        vl.map((el) => {
                            return <VedioList  hp={hp} el={el}></VedioList>
                        })
                    }

                </aside>
            </article>
        </div>
    )
}

export default Container;