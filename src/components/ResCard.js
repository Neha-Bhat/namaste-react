import { CDN_URL } from "../utils/constants";
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
const ResCard = (props) => {
    const {resData} = props;
    const {cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla} = resData?.info
    return (
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 shadow-xl hover:bg-gray-200">
            <img className="rounded-lg" src={CDN_URL+cloudinaryImageId} />
            <div className="res-info">
                <h4 className="font-bold py-2">{name}</h4>
                <span className={avgRating >= 4.5 ? 'rating rating-green' : avgRating >= 4.0 ? 'rating rating-yellow' : 'rating rating-red' }>{avgRating ? avgRating : 0}</span>
            </div>
            
            <h5 className="cuisine">{cuisines.toString()}</h5>
            <h5>{costForTwo}</h5>
            <h5>{sla.slaString}</h5>
        </div>
    )
}

export const PromotedCard = (ResCard) => {
    return (resData) => {
        return (
            <div>
            <label className="absolute bg-gray-800 text-white m-2 p-2 rounded-md">Promoted</label>
            <ResCard {...resData} />
        </div>
        )
    }
}

export default ResCard;