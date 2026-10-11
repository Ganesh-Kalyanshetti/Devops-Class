import React, { useState, useEffect } from "react";
import A from "../Products.json";
import AllProducts from "./AllProducts";
import Cart from "./Cart";
import "./AA.css";

function DiplayItems() {

    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false);

    const handleCart = (id) => {
        setCart((prev) => [...prev, id]);
    };

    const handleitems = () => {
        setShowCart(true);
    };

    return (
        <div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h1>Hello From H1 in Cart</h1>

                <button style={{ width: "100px", height: "40px" }} onClick={handleitems}> Show Cart </button>
            </div>

            {
                showCart ? ( <Cart items={cart} el={A} /> ) : (
                   
                   <div className="MainContainer">
                        {
                            A.products.map((e) => (
                                <AllProducts
                                    key={e.id}
                                    el={e}
                                    hc={handleCart}
                                />
                            ))
                        }
                    </div>
                )
            }

        </div>
    );
}

export default DiplayItems;