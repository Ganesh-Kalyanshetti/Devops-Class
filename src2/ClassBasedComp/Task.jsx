import React, { Component } from "react";

export default class Task extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }

        document.body.style.backgroundColor="red"
    }
    handleIncrement=()=> 
    {
        this.setState({
            count: this.state.count + 1
        })

        if(this.state.count<=5)
        {
            document.body.style.backgroundColor="red"
        }
        if(this.state.count>=5 && this.state.count<=10)
        {
            document.body.style.backgroundColor="blue"
        }
    }
    handleDecrement=()=> 
    {
        this.setState({
            count: this.state.count - 1
        })
        if(this.state.count<=5)
        {
            document.body.style.backgroundColor="red"
        }
        if(this.state.count>=5 && this.state.count<=10)
        {
            document.body.style.backgroundColor="blue"
        }
    }

    render() {
        return (
            <div>
                <h1>Hello from task</h1>
                <h2>{this.state.count}</h2>
                
                <button onClick={this.handleIncrement}>Increment</button>
                <button onClick={this.handleDecrement}>Decrement</button>
            </div>
        )
    }
}
