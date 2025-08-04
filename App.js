import React from "react";
import ReactDOM from "react-dom/client"
// import Logo from "./images/logo.png"
/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search Component
 *  - ResturantCardContainer
 *    -- ResturantCard
 *       -- Img
 *       -- Name of Res,Star Rating ,Cuisine,delivery time,LOcation 
 * 
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
             
                <img className="logo" src="https://ik.imagekit.io/q4iigq3f2/New%20Folder/logo.png?updatedAt=1754145966718" alt="Food Munch" />
               
            </div>

            <div className="nav-items">
                <ul>
                     <li><i className="fas fa-search"></i> Search</li>
                    <li><i className="fas fa-home"></i> Home</li>
                    <li><i className="fas fa-info-circle"></i> <span>About Us</span></li>
                    <li><i className="fas fa-phone-alt"></i> <span>Contact Us</span> </li>
                    <li><i className="fas fa-shopping-cart"></i> <span>Cart</span></li>
                    <li><i className="fas fa-sign-in-alt"></i> <span>Sign in</span></li>

                    
                </ul>
            </div>

        </div>
    )

}

const ResturantCard =() =>{
    return(
        <div className="res-card">
            <img  className ="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/mt2aggiscfl3yviatwng" alt="Bakery World"/>
            <h3>Bakery World</h3>
            <h4>Ice Creams,cakes,....</h4>
            <h4>4.3 Star Rating</h4>
            <h4>Vidya nagar</h4>





        </div>
    )
}

const Body =() =>{
    return(
        <div>
            <div className="search">Search</div>
            <div className="res-container">
                <ResturantCard/>
                <ResturantCard/><ResturantCard/><ResturantCard/><ResturantCard/><ResturantCard/><ResturantCard/><ResturantCard/><ResturantCard/><ResturantCard/><ResturantCard/>
                <ResturantCard/><ResturantCard/><ResturantCard/><ResturantCard/><ResturantCard/><ResturantCard/><ResturantCard/>
                

            </div>
        </div>
    )
}

const AppLayout = ()=>{
    return (
        <div className="app">
          <Header/>
          <Body/>

        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout/>)