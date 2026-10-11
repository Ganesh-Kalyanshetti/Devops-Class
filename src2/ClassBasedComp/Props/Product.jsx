import React, { Component, Fragment } from "react";

export default class Product extends Component
{
    render(props)
    {
        console.log(this.props);
        
        return(
            <div>
                
                {this.props.d.products.map((el)=>{

                    return <Fragment>
                        
                        <img src={el.images[0]} alt="noimg" />
                        <b>{el.title}</b>

                    </Fragment>

                })}
            </div>
        )
    }
}