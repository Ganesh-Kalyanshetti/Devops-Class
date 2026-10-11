import React, { Component } from "react";
import ReactPlayer from 'react-player';

export default class Test extends Component {
    render() {
        return (
            <div>
            
                <h2>hello from test</h2>
                <ReactPlayer src="https://youtu.be/-YaRRFrXW9M" controls width="100%" height="400px" />
            
            </div>
        )
    }
}