import ResCard from "./ResCard";
import resData from "../utils/mockData";
import { useState, useEffect } from "react";
import { RESTAURANTS_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {
    let [listOfRestaurants, setListOfRestaurants] = useState([]);
    // useEffect will be executed after the component is rendered
    useEffect(() => {
        console.log("useEffect called")
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(RESTAURANTS_URL); 
        const json = await data.json();
        console.log(json)
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    console.log("body called", listOfRestaurants)

    return listOfRestaurants.length === 0 ? <Shimmer /> :
    (
        <div className="body">
            {/* <div className="search">Search</div> */}
            <button className="filter" onClick={() => {
                const filteredList = listOfRestaurants.filter((res) => res.info.avgRating >=4.3)
                setListOfRestaurants(filteredList);
                }}>Top Restaurants</button>
            <div className="res-container">
                {
                    listOfRestaurants.map(restaurant => <ResCard key={restaurant.info.id} resData={restaurant}/>)
                }
            </div>
        </div>
    )
}

export default Body;