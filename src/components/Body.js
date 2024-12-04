import ResCard from "./ResCard";
import resData from "../utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {
    let [listOfRestaurants, setListOfRestaurants] = useState(resData);
    // useEffect will be executed after the component is rendered
    useEffect(() => {
        console.log("useEffect called")
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.zomato.com/webroutes/search/home"); // add Swiggy API URL here
        const json = data.json();
        console.log(json)
    }

    console.log("body called")

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