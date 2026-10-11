import React, { useState } from "react";

function Hoc(Component)
{
    function Maxx(props)
    {

        return  <Component data={props}></Component>

    }
    
    return Maxx
}

export default Hoc

