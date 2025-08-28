import ResturantCard from "./ResturantCard";
import resObj from "../utils/mockData";
import { useEffect, useState } from "react";

const Body =() =>{
    const array=resObj.restaurants
    const [listOfResturants,setListOfResturants]=useState(resObj.restaurants);
    // console.log(setListOfResturants)

   useEffect(()=>{
    fetchData();

   },[]);

   const fetchData = ()=>{
    const data  = fetch()
   }



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
                    // console.log(setListOfResturants(filteredList))

                }} >
                Top Rated Resturants
          </button>
          {console.log("useEffect  2 Called")}
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
