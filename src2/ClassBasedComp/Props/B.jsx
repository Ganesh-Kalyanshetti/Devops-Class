import React, { Component } from "react";
import C from "./C";

export default class B extends Component
{
    render(props)
    {
        console.log("This is in B Class",this.props);
        return(
            <div>
                <h2>This is B class</h2>
                <C bk = {this.props.ak} bk2 = {this.props.ak2} bk3={this.props}></C>

                
            </div>
        )
    }
}