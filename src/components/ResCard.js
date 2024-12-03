import { CDN_URL } from "../utils/constants";
const ResCard = (props) => {
    const {resData} = props;
    const {cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla} = resData?.info
    return (
        <div className="res-card">
            <img className="food-image" src={CDN_URL+cloudinaryImageId} />
            <div className="res-info">
                <h4>{name}</h4>
                <span className={avgRating >= 4.5 ? 'rating rating-green' : avgRating >= 4.0 ? 'rating rating-yellow' : 'rating rating-red' }>{avgRating}</span>
            </div>
            
            <h5 className="cuisine">{cuisines.toString()}</h5>
            <h5>{costForTwo}</h5>
            <h5>{sla.slaString}</h5>
        </div>
    )
}

export default ResCard;