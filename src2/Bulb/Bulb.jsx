import React, { Component } from "react";
import onimg from '../Images/OffBulb.png'
import offimg from '../Images/OnBulb.png'

export default class Bulb extends Component
{
    constructor()
    {
        super()
        this.state = {
            img : onimg
        }
        
    }
    handlechange=()=>
    {
        if(this.state.img == onimg)
        this.setState({
            img: offimg
        })
        else
        {
            this.setState({
                img:onimg
            })
        }
    }
    render()
    {
        return(
            <div>
                <img src={this.state.img} alt="onbulb" style={{width:"300px"}}/> <br /> <br />
                <button onClick={this.handlechange}>Click To Change Bulb</button>

            </div>
        )
    }
}