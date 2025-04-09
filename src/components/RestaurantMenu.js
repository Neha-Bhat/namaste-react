import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {

    [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchResData();
    }, [])

    const fetchResData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0055113&lng=77.5692358&restaurantId=2415&catalog_qa=undefined&submitAction=ENTER')
        const json = await data.json();
        console.log(json)
        setResInfo(json.data)
    }
    const info = resInfo?.cards?.[2]?.card?.card?.info || {};
    const menu = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || {};
    const {name, costForTwoMessage, avgRatingString, cuisines, locality, totalRatingsString} = info
    return resInfo === null ? ( <Shimmer /> ) : (
        <div className="restaurant-menu">
            <div className="res-spec">
                <div>
                    <h1>{name}</h1>
                    <h3>{locality}</h3>
                </div>
                <div>
                    <h3>{avgRatingString} ⭐</h3>
                    <h3>{totalRatingsString}</h3>
                </div>
            </div>
            <div className="extra-details">
                <div>
                    <span className="extra-info">{cuisines}</span>
                    <span className="extra-info">{costForTwoMessage}</span>
                </div>
            </div>
            <div className="menu-of-res">

            </div>
        </div>
    )
}

export default RestaurantMenu;