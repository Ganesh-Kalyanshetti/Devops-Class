import React, { useState } from "react";

function Test()
{

    let [state,setState] = useState({

        user:"",
        password:"",
        gender:"",
        qualification:"",
        lang:[]

    })


    let handleChange=(e)=>
    {
        let {name,value} = e.target;

        setState({...state,[name]:value});

    }
    
    let handleSubmit=(e)=>
    {
        e.preventDefault();

        console.log({...state});
        
    }
    return(
        <div>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">Username </label>
                <input type="text" name="user" id="" onChange={handleChange} /> <br /> <br />

                <label htmlFor="">Password </label>
                <input type="text" name="password" id="" onChange={handleChange} /> <br /> <br />

                <label htmlFor="">Gender</label>
                <input type="radio" name="gender" id="" value="Male" onChange={handleChange} />
                <input type="radio" name="gender" id="" value="FeMale" onChange={handleChange} /> <br /> <br />

                <label htmlFor="">Qualification </label>
                <select name="qualification" id="" onChange={handleChange}>
                    <option value="CS">CS</option>
                    <option value="IS">IS</option>
                    <option value="EC">EC</option>
                    <option value="EE">EE</option>
                </select> <br /> <br />

                <label htmlFor="">Language</label> <br /> <br />

                <input type="checkbox" name="lang" id="" value="Kannada" onChange={handleChange} />  Kannada 
                <input type="checkbox" name="lang" id="" value="Tamil"  onChange={handleChange}  /> Tamil 
                <input type="checkbox" name="lang" id="" value="English" onChange={handleChange}  /> English 
                <input type="checkbox" name="lang" id="" value="Hindi" onChange={handleChange} /> Hindi 
                
                <br /><br /><button>Submit</button>

            </form>
        </div>
    )
}

export default Test;