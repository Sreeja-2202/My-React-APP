import {LOGO_URL} from "../utils/constants" 
 
 
 const Header =()=>{
    return (
        <div className="header">

            <div className="Logo-container"> 
             
                <img className="logo" src={LOGO_URL} alt="Food Munch" />
               
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
export default Header;