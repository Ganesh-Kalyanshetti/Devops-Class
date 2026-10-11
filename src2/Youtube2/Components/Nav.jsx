import React from "react";
import '../Styleee/Nav.css'
import logo from '../../Images/Youtube-logo.png'
function Nav() {

    let handleLogin=()=>{

        alert("This is Just Demo")
    }

    let handleReload = ()=>{

        document.location.reload()
    }
    
    let handlesearch=()=>{
        alert("Stil in Development")
    }
    return (

        <div>
            <div className="navsection">

                <div className="logo" onClick={handleReload}>
                    <img src={logo} alt="" />
                    <h2>YouTube</h2>
                </div>

                
                <div className="search">
                    <input type="text" id= "searchbtn" placeholder=" Search" />
                    <button style={{backgroundColor: "rgb(49, 47, 47)"}} onClick={handlesearch}>🔍</button>

                </div>

                <div className="right">
                    <span>⋮</span>
                    <button onClick={handleLogin}>Sign-in</button>
                </div>


            </div>
        </div>
    )
}

export default Nav