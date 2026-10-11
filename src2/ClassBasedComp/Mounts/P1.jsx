import React, { Component } from "react";

export default class P1 extends Component {

    constructor() {
        super()

        // this.state = {
        //     count: 0
        // }
        this.state = 
        {
            delete : false
        }

    }
    
    // componentDidMount=()=>
    // {
    //     document.title = "Hello P1"
    //     alert("Hello Everyone")
    // }

    // componentDidUpdate=()=>{

    //     alert("Occurs when any state changes in Front-end Page")
    // }

    render() {
        return (
            <div>
                {/* <h1>Hello From P1 {this.state.count}</h1> <br /> */}

                {/* <input type="text" name="" id="" onClick={this.handleClick}/> <br /> <br /> */}
                
                <button onClick={()=>{this.setState({delete:true})}}>Click to Function</button>

                {
                    this.state.delete == true ? null : <Usersss></Usersss>
                }
            </div>
        )
    }
}

class Usersss extends Component
{   
    
    componentWillUnmount = () => 
    {

        alert("hello")

    }
    

    render()
    {
        return(
            <div>
                <h1>This is Usersss Classs data</h1> <br /> 
                <input type="text" /> <br /> <br />
                <button>Heyyyyy</button>
            </div>
        )
    }
}