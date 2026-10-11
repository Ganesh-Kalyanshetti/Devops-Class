import React from "react";
import productsData from "../../Products.json";
import Products from "./Products";

const Data = () => {
    

    return (
        <div>
            <h1>Data</h1>
            <Products pd={productsData}></Products>
        </div>
    );
};

export default Data;