import React from "react";
import ReactDOM from "react-dom/client"
// import Logo from "./images/Logo_fm.png"
/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search Component
 *  - ResturantCardContainer
 *    -- ResturantCard
 * Footer
 *  - CopyRights
 *  - Links
 *  - Address
 *  - Contact

*/
// Header  Component
const Header =()=>{
    return (
        <div className="header">

            <div className="Logo-container"> 
                <img className ="logo" src="" alt="Food Munch"/>
                <img src="../"/>
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us </li>
                    <li>Cart</li>
                    
                </ul>
                

            </div>

        </div>
    )

}

const AppLayout = ()=>{
    return (
        <div className="app">
          <Header/>

        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout/>)