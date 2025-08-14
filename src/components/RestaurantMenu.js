import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId); //custom hook 
    if(resInfo === null) return <Shimmer />
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
                        {itemCards.map(item => (<li key={item.card.info.id} className="item-info">{item.card.info.name} - Rs. {item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</li>))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default RestaurantMenu;