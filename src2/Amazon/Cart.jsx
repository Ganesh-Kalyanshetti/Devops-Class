import React, { Fragment } from "react";

function Cart(props) 
{
    console.log("This is Cart ", props);

    return (
        <div>
            <div>
                {
                    props.items.map((e)=>{

                        let product = props.el.products.find((item) => item.id === e);

                        if (!product) return null;

                        return <Fragment key={e}>

                            <div>
                               
                                <img src={product.images[0]} alt="" width="100" />
                                <span>{product.title}</span>
                                
                            </div>
                        </Fragment>

                    })
                }
            </div>
        </div>
    )
}

export default Cart

 {/* {
                                    <img src={props.el.images[e]} alt="" />
                                } */}