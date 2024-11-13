import React from "react";
import ReactDOM  from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://th.bing.com/th/id/OIP.uZ2JtS-P27KGz_YIX8lTgQAAAA?w=161&h=180&c=7&r=0&o=5&pid=1.7"/>
            </div>
            <div className="nav-container">
                <ul className="nav-items">
                    <li>Home</li>
                    <li>Contact Us</li>
                    <li>About Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const Footer = () => {
    return (
        <div className="footer">
            <span><i>Namaste Food</i></span>
        </div>
    )
};

const resData = {
    "info": {
        "thumbnail": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/6d990316fc359969f8fe3e77290ff2a3",
        "id": "160120",
        "name": "Asha Sweet Center - Since 1951",
        "cloudinaryImageId": "egm3aym4fa73hst2tv9b",
        "locality": "Gandhi Bazaar",
        "areaName": "Basavanagudi",
        "costForTwo": "₹250 for two",
        "cuisines": [
            "Sweets",
            "Snacks",
            "Fast Food",
            "Bakery",
            "Beverages"
        ],
        "avgRating": 4.6,
        "veg": true,
        "parentId": "472555",
        "avgRatingString": "4.6",
        "totalRatingsString": "4.7K+",
        "sla": {
            "deliveryTime": 33,
            "lastMileTravel": 3,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "3.0 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-11-13 21:30:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "Green%20Dot%20Awards/Best%20In%20Mithai.png",
                    "description": "Delivery!"
                }
            ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {},
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "description": "Delivery!",
                                "imageId": "Green%20Dot%20Awards/Best%20In%20Mithai.png"
                            }
                        }
                    ]
                },
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
        "context": "seo-data-def6b50c-fd64-40c2-b65e-1c23d7b5b568"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/bangalore/asha-sweet-center-since-1951-gandhi-bazaar-basavanagudi-rest160120",
        "type": "WEBLINK"
    }
}

const ResCard = (props) => {
    const {resData} = props;
    console.log(resData)
    return (
        <div className="res-card">
            <img className="food-image" src={props.resData.info.thumbnail} />
            <div className="res-info">
                <h3>{props.resData.info.name}</h3>
                <span className="rating">{props.resData.info.avgRating}</span>
            </div>
            
            <h4>{props.resData.info.cuisines}</h4>
            <h4>{props.resData.info.costForTwo}</h4>
            <b>{props.resData.info.sla.slaString}</b>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {/* <ResCard name="Namaste" cuisines="[South Indian]" thumbnail="https://b.zmtcdn.com/data/pictures/chains/0/18924790/11622036dde0d49cc0dc77cf266983ff_o2_featured_v2.jpg" avgRating="4.3" price="INR 100 for one" eta="26 min"/>
                <ResCard resName="Ibaco" cuisines="[Desserts, Ice cream]" thumbnail="https://b.zmtcdn.com/data/pictures/chains/8/53198/995145af92d5d5004cc7e180d4d104c1_o2_featured_v2.jpg" avgRating="4.0" price="INR 150 for one" eta="20 min"/> */}
                <ResCard resData={resData}/>
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
            <Footer />
        </div>
    )
}

const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<AppLayout />)