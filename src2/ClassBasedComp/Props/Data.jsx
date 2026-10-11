import React, { Component } from "react";
import JSONDATA from "../Products.json"
import Product from "./Product";

export default class Data extends Component
{
    render()
    {
        return(
            <div>
                <Product d={JSONDATA}></Product>
            </div>
        )
    }
}