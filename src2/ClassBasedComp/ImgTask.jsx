import React, { Component } from "react";
import img1 from '../Images/img1.jpg';
import img2 from '../Images/img2.jpg';
import img3 from '../Images/img4.jpg';
import img4 from '../Images/img5.jpg';
import img5 from '../Images/img3.jpg';

export default class ImgTask extends Component {

    constructor() {
        super()

        this.state = {
            idx: 0,
            img: [img1, img2, img3, img4, img5]
        }
    }

    handleleft = () => {
        let n = this.state.img.length
        console.log(n);

        if (this.state.idx <= 0) {
            this.setState({ idx: 0 })
        }
        else {
            this.setState({ idx: this.state.idx - 1 })
        }

    }

    handleright = () => {
        let n = this.state.img.length
        console.log(n);

        if (this.state.idx < n - 1) {
            this.setState({ idx: this.state.idx + 1 })
        }
        else {
            this.setState({ idx: n - 1 })
        }
    }
    render() {
        return (
            <div>

                <h2 style={{display: "flex", justifyContent: "center"}}>This is idx num {this.state.idx}</h2>
                <div style={{ display: "flex", justifyContent: "center", gap: "10px", alignItems: "center" }}>

                    <button onClick={this.handleleft} style={{ height: "50px", width: "50px" }}> ⬅️ </button>

                    <img src={this.state.img[this.state.idx]} alt="ntg else" id="imgess" style={{ width: "500px", height: "400px" }} />

                    <button onClick={this.handleright} style={{ height: "50px", width: "50px" }}> ➡️ </button>

                    
                </div>
            </div>
        )
    }
}