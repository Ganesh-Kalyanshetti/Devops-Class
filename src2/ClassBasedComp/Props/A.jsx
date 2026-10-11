import React from "react";
import { Component } from "react";
import B from "./B";

export default class A extends Component
{
    render()
    {
        return(
            <div>
                <h2>This is A Class</h2>
                <B ak = "Hello this is key from A Class" ak2 = "Second Value"></B>
            </div>
        )
    }
}