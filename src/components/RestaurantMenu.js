import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_URL } from "../utils/constants";

const RestaurantMenu = () => {

    const {resId} = useParams();

    [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchResData();
    }, [])

    const fetchResData = async () => {
        const data = await fetch(MENU_URL+resId+'&catalog_qa=undefined&submitAction=ENTER')
        const json = await data.json();
        console.log(json)
        setResInfo(json.data)
    }
    const info = resInfo?.cards?.[2]?.card?.card?.info || {};
    const menu = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || {};
    console.log(menu)
    let found
    if(menu.length) {
        found = menu.find(obj => Array.isArray(obj.card?.card?.itemCards))
    }
    console.log(found)
    const {itemCards} = found?.card?.card || []
    console.log(itemCards)
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
                <div className="top-picks">
                    <ul>
                        {itemCards.map(item => (<li key={item.card.info.id}>{item.card.info.name} - Rs. {item.card.info.price/100}</li>))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default RestaurantMenu;