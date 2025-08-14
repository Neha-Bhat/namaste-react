import ResCard from "./ResCard";
import resData from "../utils/mockData";
import { useState, useEffect } from "react";
import { RESTAURANTS_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    let [listOfRestaurants, setListOfRestaurants] = useState([]);
    let [filteredRestaurants, setFilteredRestaurants] = useState([]);
    let [searchText, setSearchText] = useState("");
    // useEffect will be executed after the component is rendered
    // in this case, it will be called only once after initial render
    useEffect(() => {
        const callFetch = async () => {
            await fetchData(); // Call the async function
          };
          callFetch();
    }, []);

    const fetchData = async () => {
        const data = await fetch(RESTAURANTS_URL); 
        const json = await data.json();
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    const isOnline = useOnlineStatus();
    if(isOnline === false) return <h1>Oops! Looks like you are offline. Please check your internet connection!</h1>

    // Conditional Rendering
    return listOfRestaurants?.length === 0 ? <Shimmer /> :
    (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value)
                    }} />
                    <button onClick={() => {
                        const filteredRestaurant = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestaurants(filteredRestaurant)
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                const filteredList = listOfRestaurants.filter((res) => res.info.avgRating >=4.3)
                setListOfRestaurants(filteredList);
                }}>Top Restaurants</button>
            </div>
            <div className="res-container">
                {
                    filteredRestaurants.map(restaurant => <Link to={"restaurants/" + restaurant.info.id} key={restaurant.info.id}><ResCard resData={restaurant}/></Link>)
                }
            </div>
        </div>
    )
}

export default Body;