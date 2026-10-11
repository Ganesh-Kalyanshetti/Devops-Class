import React, { Fragment } from "react";
import VedioList from "./VedioList";
import VedioPlayer from "./VedioPlayer";
import Nav from "./Components/Nav";
import './Styleee/Container.css'

function Container(props) {
    // console.log(props);

    return (
        <div>
            <div>
                <Nav></Nav>
            </div>
            
            <article className="main-container">

                <aside className="left-section">
                    <VedioPlayer vp={props.vp}></VedioPlayer>
                    
                </aside>
                
                <aside className="right-section">

                    {
                        props.vl.map((e) => {

                            return <VedioList key={e.id} hp={props.hp} el={e}> </VedioList>
                        })
                    }
                </aside>

            </article>

        </div>
    )
}
export default Container