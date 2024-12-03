import ResCard from "./ResCard";
import resData from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    let [listOfRestaurants, setListOfRestaurants] = useState(resData);
    // const listOfRestaurants = [];
    return (
        <div className="body">
            {/* <div className="search">Search</div> */}
            <button className="filter" onClick={() => {
                const filteredList = listOfRestaurants.filter((res) => res.info.avgRating >=4.5)
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