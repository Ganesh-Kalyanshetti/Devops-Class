import React, { Component } from "react";

export default class InputChange extends Component
{
    constructor()
    {
        super()
        this.state = {

            bc : "",
            backcolor:""
        }
    }

    handleChange=(e)=>
    {
        this.setState({
            bc : e.target.value,
            backcolor :  e.target.value
        })
    }
    render()
    {
        return(
            <div style={{backgroundColor:this.state.backcolor}}>

                <h2>Hello Write in Below input tag to chnage backgroundColor </h2>
                <br /><br />
                <input type="text" value={this.state.bc} onChange={this.handleChange} placeholder="e.g. red, blue, yellow"/> <br /><br />
                

            </div>
        )
    }
}