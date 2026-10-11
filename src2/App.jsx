import React, { Component } from "react";
import Display from "./Youtube2/Display";
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Test from "./Youtube2/Test";

const routerrr = createBrowserRouter([
    {
        path:'/',
        element:<Display></Display>
    }
])


const App=()=>{

    return(
        <div>
            <RouterProvider router={routerrr}/> 
        </div>
    )
}

export default App;

// export default class App extends Component {

    
//     render() {
//         return (
//             <div>
               
//                 <Display></Display>
//             </div>
//         )
//     }
// }