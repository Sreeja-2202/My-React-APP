import {CDN_URL, STAR_ICON} from "../utils/constants"



const ResturantCard =(props) =>{
    const {resData}=props
    const {name,avgRating,cuisines,locality,cloudinaryImageId} = resData?.info
    const {slaString} = resData?.info.sla // optional Chaining
    
    return(
        <div className="res-card">
            <img  className ="res-logo" src={CDN_URL+cloudinaryImageId} alt="Bakery World"/>
            <h3 className="res_name">{name}</h3>
            <h4>
              
               <span className="res_rating"><img className="star_icon" src={STAR_ICON} alt="star" width="16" />
                {" "}{avgRating }</span>
              
              <span className="res_time">{" "}{"("}{slaString}{")"}</span>
              
            </h4>
            
            
            <h4 className="res_cuisines">{cuisines.join(", ")}</h4>
            <h4 className="res_locality">{locality}</h4>
            {/* <h4>{resData.info.costForTwo}</h4> */}
            





        </div>
    )
}

export default ResturantCard;