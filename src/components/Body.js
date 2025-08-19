import ResturantCard from "./ResturantCard";
import resObj from "../utils/mockData";
import { useState } from "react";

const Body =() =>{
    const array=resObj.restaurants
    const [listOfResturants,setListOfResturants]=useState(array);
    console.log(array)




    return(
        <div>
            <div className="filter">
                <button className="filter_btn" 
                onClick={()=>{
                   const filteredList = listOfResturants.filter( (res)=>res.info.avgRating>=4.5)
                    // console.log(resObj.restaurants.filter( (res)=>res.info.avgRating>4.5))
                    // console.log(filteredList)
                    // console.log(resObj.restaurants)
                    // console.log(setListOfResturants(filteredList))
                    setListOfResturants(filteredList)

                }} >
                Top Rated Resturants
          </button>
            </div>
            <div className="res-container">
                {listOfResturants.map((restaurant) => (

    <ResturantCard key={restaurant.info.id} resData={restaurant} />
))}
                
                
                
                

            </div>
        </div>
    )
}


export default Body;