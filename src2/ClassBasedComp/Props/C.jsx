import React, { Component } from "react";

export default class C extends Component{
    render(props)
    {
        console.log("This is in C Class",this.props);
        
        return(
            <div>
            
                <h2>This is C class</h2>
                <h2> this is first one ---- {this.props.bk}</h2>
                <h2>this is second one ---- {this.props.bk2}</h2>
                {/* <h2>this is whole value ---- {this.props.bk3}</h2> */}
                <h2>{JSON.stringify(this.props.bk3)}</h2>
            
            </div>
        )
    }
}