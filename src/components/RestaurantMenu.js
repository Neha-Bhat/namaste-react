import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId); //custom hook 
    if(resInfo === null) return <Shimmer />
    const info = resInfo?.cards?.[2]?.card?.card?.info || {};
    const menu = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || {};
    let found
    if(menu.length) {
        found = menu.find(obj => Array.isArray(obj.card?.card?.itemCards))
    }
    const {itemCards} = found?.card?.card || []
    const {name, costForTwoMessage, avgRatingString, cuisines, locality, totalRatingsString} = info
    return resInfo === null ? ( <Shimmer /> ) : (
        <div className="p-5 m-auto flex flex-col items-center justify-center w-full border-2 border-gray-300">
            <div className="p-2 flex w-1/2 justify-between gap-4 border-2 border-gray-100 rounded-lg">
                <div>
                    <h3>{name}</h3>
                    <p>{locality}</p>
                </div>
                <div>
                    <h3>{avgRatingString} ⭐</h3>
                    <h3>{totalRatingsString}</h3>
                </div>
            </div>
            <div className="flex gap-2">
                <div className="flex gap-5">
                    <span className="">{Object.values(cuisines).join(", ")}</span>
                    <span className="">{costForTwoMessage}</span>
                </div>
            </div>
            <div className="menu-of-res">
                <div className="top-picks">
                    <ul>
                        {itemCards?.map(item => (<li key={item.card.info.id} className="p-1">{item.card.info.name} - Rs. {item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</li>))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default RestaurantMenu;