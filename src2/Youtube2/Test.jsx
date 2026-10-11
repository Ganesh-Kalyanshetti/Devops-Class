import React, { useEffect, useState } from "react";
import axios from "axios";

function Test() {

    let [name, setName] = useState({
        a: "",
        b: ""
    });

    let [submit, setSubmit] = useState(false); 

    useEffect(() => {

        if (submit) { 

            const edit = async () => {
                try {
                    await axios.post(
                        "http://localhost:5000/cmt2",
                        name
                    );

                } catch (e) {
                    console.log(e);
                }
            };

            edit();
            setSubmit(false); 
        }

    }, [submit]); 

    return (
        <div>

            <form onSubmit={(e) => { e.preventDefault(); setSubmit(true);}}>

                <input  name="a" onChange={(e) => setName({...name, a:e.target.value})}/>

                <br/><br/>

                <input  name="b" onChange={(e) => setName({...name, b:e.target.value})}/>

                <br/><br/>

                <button>Click to add the data</button>

            </form>

        </div>
    );
}

export default Test;