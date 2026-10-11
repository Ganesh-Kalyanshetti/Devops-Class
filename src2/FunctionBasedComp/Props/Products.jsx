import React, { Fragment } from "react";

const Products = (props) => {
    console.log(props);

    return (
        <div >
            
            {
            props.pd.products.map((el) => {

                    return <Fragment>
                        <img src={el.images[0]} alt="No-Img" />
                        <b style={{fontSize:"100px"}}>{el.title}</b>
                    </Fragment>

                })
            }
        </div>
    )

}
export default Products