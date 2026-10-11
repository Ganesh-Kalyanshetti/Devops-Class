import React from "react";
import './AllProducts.css'
function AllProducts(props) 
{
    
    // console.log(props);
    return (
        <div className="maincon">

            <div className="All-Product">

                <div className="All-Images">
                    {
                        <img src={props.el.images[0]} alt="" />

                    }
                </div>
                
                <span>{props.el.title}</span>
                <button className="cartbtn" onClick={()=>props.hc(props.el.id)}>add to cart</button>
            
            </div>

        </div>
    )
}
export default AllProducts;