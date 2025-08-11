import ResturantCard from "./ResturantCard";
import resObj from "../utils/mockData";
import { useState } from "react";

const Body =() =>{

const [resObj,setResObj] = useState([resObj])


    return(
        <div>
            <div className="filter">
                <button className="filter_btn" 
                onClick={()=>{
                    const filteredData = resObj.restaurants.filter( (res)=>res.info.avgRating>4)
                    // console.log()
                    setResObj(filteredData)

                }} >
                Top Rated Resturants
          </button>
            </div>
            <div className="res-container">
                {resObj.restaurants.map((restaurant) => (

    <ResturantCard key={restaurant.info.id} resData={restaurant} />
))}
                
                
                
                

            </div>
        </div>
    )
}


export default Body;