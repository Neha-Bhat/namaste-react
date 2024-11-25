import ResCard from "./ResCard";
import resData from "../utils/mockData";

const Body = () => {
    return (
        <div className="body">
            {/* <div className="search">Search</div> */}
            <button className="filter" onClick={() => {resData = filterRestaurants()}}>Top Restaurants</button>
            <div className="res-container">
                {
                    resData.map(restaurant => <ResCard key={restaurant.info.id} resData={restaurant}/>)
                }
            </div>
        </div>
    )
}

function filterRestaurants() {
    return resData.filter(res => res.info.avgRating >=4.5)
}

export default Body;