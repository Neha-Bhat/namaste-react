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

const resData = [
        {
            "info": {
                "id": "77949",
                "name": "Burger King",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/4ee8bc77-ca9f-41bd-a0f3-511c70902b91_77949.JPG",
                "locality": "Gandhi Bazar",
                "areaName": "Basavanagudi",
                "costForTwo": "₹350 for two",
                "cuisines": [
                    "Burgers",
                    "American"
                ],
                "avgRating": 4.3,
                "parentId": "166",
                "avgRatingString": "4.3",
                "totalRatingsString": "32K+",
                "sla": {
                    "deliveryTime": 30,
                    "lastMileTravel": 3,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25-30 mins",
                    "lastMileTravelString": "3.0 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-11-14 23:59:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "Rxawards/_CATEGORY-Burger.png",
                            "description": "Delivery!"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "Delivery!",
                                        "imageId": "Rxawards/_CATEGORY-Burger.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "60% OFF",
                    "subHeader": "UPTO ₹120"
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
                "context": "seo-data-f6942b28-4f6a-460e-8f9d-39a6e9ab7c96"
            },
            "cta": {
                "link": "https://www.swiggy.com/city/bangalore/burger-king-gandhi-bazar-basavanagudi-rest77949",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "23846",
                "name": "Domino's Pizza",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/24/a543f9e4-cc95-47b6-a728-c8a8538cf7e5_23846.JPG",
                "locality": "Rehinus Street",
                "areaName": "Richmond Town",
                "costForTwo": "₹400 for two",
                "cuisines": [
                    "Pizzas",
                    "Italian",
                    "Pastas",
                    "Desserts"
                ],
                "avgRating": 4.3,
                "parentId": "2456",
                "avgRatingString": "4.3",
                "totalRatingsString": "17K+",
                "sla": {
                    "deliveryTime": 25,
                    "lastMileTravel": 2.4,
                    "serviceability": "SERVICEABLE",
                    "slaString": "20-25 mins",
                    "lastMileTravelString": "2.4 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-11-15 02:59:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "Rxawards/_CATEGORY-Pizza.png",
                            "description": "Delivery!"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "Delivery!",
                                        "imageId": "Rxawards/_CATEGORY-Pizza.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "₹175 OFF",
                    "subHeader": "ABOVE ₹999",
                    "discountTag": "FLAT DEAL"
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
                        "rating": "3.8",
                        "ratingCount": "2.3K+"
                    },
                    "source": "GOOGLE",
                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
                "context": "seo-data-f6942b28-4f6a-460e-8f9d-39a6e9ab7c96"
            },
            "cta": {
                "link": "https://www.swiggy.com/city/bangalore/dominos-pizza-rehinus-street-richmond-town-rest23846",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "432976",
                "name": "KFC",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/5/0c0221a0-018a-4ef5-a4a4-e22ffe28aa95_432976.JPG",
                "locality": "Double Road",
                "areaName": "Shanti Nagar",
                "costForTwo": "₹400 for two",
                "cuisines": [
                    "Burgers",
                    "Fast Food",
                    "Rolls & Wraps"
                ],
                "avgRating": 4.3,
                "parentId": "547",
                "avgRatingString": "4.3",
                "totalRatingsString": "3.5K+",
                "sla": {
                    "deliveryTime": 28,
                    "lastMileTravel": 1.9,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25-30 mins",
                    "lastMileTravelString": "1.9 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-11-14 23:00:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "20% OFF",
                    "subHeader": "ABOVE ₹2999",
                    "discountTag": "FLAT DEAL",
                    "discountCalloutInfo": {
                        "message": "Free Delivery",
                        "logoCtx": {
                            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                        }
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
                "context": "seo-data-f6942b28-4f6a-460e-8f9d-39a6e9ab7c96"
            },
            "cta": {
                "link": "https://www.swiggy.com/city/bangalore/kfc-double-road-shanti-nagar-rest432976",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "43836",
                "name": "McDonald's",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/5e7991d9-6a0d-4034-82a9-59bd2bbdc0b3_43836.jpg",
                "locality": "MG Road",
                "areaName": "Ashok Nagar",
                "costForTwo": "₹400 for two",
                "cuisines": [
                    "Burgers",
                    "Beverages",
                    "Cafe",
                    "Desserts"
                ],
                "avgRating": 4.4,
                "parentId": "630",
                "avgRatingString": "4.4",
                "totalRatingsString": "25K+",
                "sla": {
                    "deliveryTime": 37,
                    "lastMileTravel": 2.5,
                    "serviceability": "SERVICEABLE",
                    "slaString": "35-40 mins",
                    "lastMileTravelString": "2.5 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-11-15 02:45:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "Rxawards/_CATEGORY-Burger.png",
                            "description": "Delivery!"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "Delivery!",
                                        "imageId": "Rxawards/_CATEGORY-Burger.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹209"
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
                "context": "seo-data-f6942b28-4f6a-460e-8f9d-39a6e9ab7c96"
            },
            "cta": {
                "link": "https://www.swiggy.com/city/bangalore/mcdonalds-mg-road-ashok-nagar-rest43836",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "69883",
                "name": "Kanti Sweets",
                "cloudinaryImageId": "r9rgeixsa2v0sakjfoio",
                "locality": "Cunningham Road",
                "areaName": "Cunningham Road",
                "costForTwo": "₹100 for two",
                "cuisines": [
                    "Desserts"
                ],
                "avgRating": 4.8,
                "veg": true,
                "parentId": "4700",
                "avgRatingString": "4.8",
                "totalRatingsString": "1.7K+",
                "sla": {
                    "deliveryTime": 32,
                    "lastMileTravel": 4.2,
                    "serviceability": "SERVICEABLE",
                    "slaString": "30-35 mins",
                    "lastMileTravelString": "4.2 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-11-14 23:00:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "aggregatedDiscountInfoV2": {},
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
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
                "context": "seo-data-f6942b28-4f6a-460e-8f9d-39a6e9ab7c96"
            },
            "cta": {
                "link": "https://www.swiggy.com/city/bangalore/kanti-sweets-cunningham-road-rest69883",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "822315",
                "name": "Subway",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/24/3ab699af-9b2c-4107-9d66-88c5e4e540ae_822315.JPG",
                "locality": "Langford Road",
                "areaName": "Richmond Town",
                "costForTwo": "₹350 for two",
                "cuisines": [
                    "Salads",
                    "Snacks",
                    "Desserts",
                    "Beverages"
                ],
                "avgRating": 4.4,
                "parentId": "2",
                "avgRatingString": "4.4",
                "totalRatingsString": "572",
                "sla": {
                    "deliveryTime": 25,
                    "lastMileTravel": 2.1,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25-30 mins",
                    "lastMileTravelString": "2.1 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-11-15 01:00:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "Rxawards/_CATEGORY-Sandwiches.png",
                            "description": "Delivery!"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "Delivery!",
                                        "imageId": "Rxawards/_CATEGORY-Sandwiches.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹119"
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
                "context": "seo-data-f6942b28-4f6a-460e-8f9d-39a6e9ab7c96"
            },
            "cta": {
                "link": "https://www.swiggy.com/city/bangalore/subway-langford-road-richmond-town-rest822315",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "352791",
                "name": "Grameen Kulfi",
                "cloudinaryImageId": "gjcslopkyvnsc1gjjguq",
                "locality": "8th Block",
                "areaName": "Koramangala",
                "costForTwo": "₹120 for two",
                "cuisines": [
                    "Ice Cream",
                    "Desserts"
                ],
                "avgRating": 4.9,
                "veg": true,
                "parentId": "12175",
                "avgRatingString": "4.9",
                "totalRatingsString": "723",
                "sla": {
                    "deliveryTime": 38,
                    "lastMileTravel": 5.5,
                    "serviceability": "SERVICEABLE",
                    "slaString": "35-40 mins",
                    "lastMileTravelString": "5.5 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-11-14 23:00:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "pureveg",
                                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "60% OFF",
                    "subHeader": "UPTO ₹110"
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
                "context": "seo-data-f6942b28-4f6a-460e-8f9d-39a6e9ab7c96"
            },
            "cta": {
                "link": "https://www.swiggy.com/city/bangalore/grameen-kulfi-8th-block-koramangala-rest352791",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "622202",
                "name": "MOJO Pizza - 2X Toppings",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/295f1bfc-237b-4bd4-832b-a23fdf08f8aa_622202.JPG",
                "locality": "Langford Road",
                "areaName": "Shantinagar",
                "costForTwo": "₹250 for two",
                "cuisines": [
                    "Pizzas",
                    "Italian",
                    "Fast Food",
                    "Desserts"
                ],
                "avgRating": 4.6,
                "parentId": "11329",
                "avgRatingString": "4.6",
                "totalRatingsString": "527",
                "sla": {
                    "deliveryTime": 25,
                    "lastMileTravel": 1.9,
                    "serviceability": "SERVICEABLE",
                    "slaString": "20-30 mins",
                    "lastMileTravelString": "1.9 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-11-15 02:00:00",
                    "opened": true
                },
                "badges": {
                    "textExtendedBadges": [
                        {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "",
                                        "fontColor": "#7E808C",
                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                        "shortDescription": "options available"
                                    }
                                }
                            ]
                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹159"
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
                "context": "seo-data-f6942b28-4f6a-460e-8f9d-39a6e9ab7c96"
            },
            "cta": {
                "link": "https://www.swiggy.com/city/bangalore/mojo-pizza-2x-toppings-langford-road-shantinagar-rest622202",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "643832",
                "name": "WeFit - Protein Bowls, Salads & Sandwiches",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/30/59e251dc-b6d9-4566-97c3-931b83ef7061_643832.JPG",
                "locality": "Langford Road",
                "areaName": "Santhinagar",
                "costForTwo": "₹250 for two",
                "cuisines": [
                    "Healthy Food",
                    "Salads",
                    "Keto",
                    "Snacks"
                ],
                "avgRating": 4.7,
                "parentId": "355285",
                "avgRatingString": "4.7",
                "totalRatingsString": "518",
                "sla": {
                    "deliveryTime": 25,
                    "lastMileTravel": 1.9,
                    "serviceability": "SERVICEABLE",
                    "slaString": "20-30 mins",
                    "lastMileTravelString": "1.9 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-11-15 02:00:00",
                    "opened": true
                },
                "badges": {
                    "textExtendedBadges": [
                        {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "brand",
                            "fontColor": "#7E808C"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "",
                                        "fontColor": "#7E808C",
                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                        "shortDescription": "brand"
                                    }
                                }
                            ]
                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹129"
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
                "context": "seo-data-f6942b28-4f6a-460e-8f9d-39a6e9ab7c96"
            },
            "cta": {
                "link": "https://www.swiggy.com/city/bangalore/wefit-protein-bowls-salads-and-sandwiches-langford-road-santhinagar-rest643832",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "750396",
                "name": "Daily Kitchen - Homely Meals",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/19/741d7d41-1341-4358-b6e0-cc22b8e82f9a_750396.JPG",
                "locality": "Lakshmi Road",
                "areaName": "Langford Road",
                "costForTwo": "₹250 for two",
                "cuisines": [
                    "Home Food",
                    "Indian",
                    "North Indian",
                    "Thalis"
                ],
                "avgRating": 4.5,
                "parentId": "444382",
                "avgRatingString": "4.5",
                "totalRatingsString": "420",
                "sla": {
                    "deliveryTime": 15,
                    "lastMileTravel": 1.9,
                    "serviceability": "SERVICEABLE",
                    "slaString": "10-20 mins",
                    "lastMileTravelString": "1.9 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-11-15 02:00:00",
                    "opened": true
                },
                "badges": {
                    "textExtendedBadges": [
                        {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "",
                                        "fontColor": "#7E808C",
                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                        "shortDescription": "options available"
                                    }
                                }
                            ]
                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹119"
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
                "context": "seo-data-f6942b28-4f6a-460e-8f9d-39a6e9ab7c96"
            },
            "cta": {
                "link": "https://www.swiggy.com/city/bangalore/daily-kitchen-homely-meals-lakshmi-road-langford-road-rest750396",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "503002",
                "name": "NH1 Bowls - Highway To North",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/8/aea607a6-5ce6-4fe6-b7d1-7ba2bacdc647_503002.jpg",
                "locality": "Lakshmi Road",
                "areaName": "Shanti Nagar",
                "costForTwo": "₹250 for two",
                "cuisines": [
                    "North Indian",
                    "Punjabi",
                    "Home Food"
                ],
                "avgRating": 4.6,
                "parentId": "22452",
                "avgRatingString": "4.6",
                "totalRatingsString": "614",
                "sla": {
                    "deliveryTime": 15,
                    "lastMileTravel": 1.9,
                    "serviceability": "SERVICEABLE",
                    "slaString": "10-20 mins",
                    "lastMileTravelString": "1.9 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-11-15 02:00:00",
                    "opened": true
                },
                "badges": {
                    "textExtendedBadges": [
                        {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "",
                                        "fontColor": "#7E808C",
                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                        "shortDescription": "options available"
                                    }
                                }
                            ]
                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹139"
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
                "context": "seo-data-f6942b28-4f6a-460e-8f9d-39a6e9ab7c96"
            },
            "cta": {
                "link": "https://www.swiggy.com/city/bangalore/nh1-bowls-highway-to-north-lakshmi-road-shanti-nagar-rest503002",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "681612",
                "name": "LeanCrust Pizza- ThinCrust Experts",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/30/14414940-565f-4b31-8880-eb44478a5ec0_681612.jpg",
                "locality": "Lakshmi Road",
                "areaName": "Shanti Nagar",
                "costForTwo": "₹300 for two",
                "cuisines": [
                    "Pizzas",
                    "Italian",
                    "Desserts"
                ],
                "avgRating": 4.7,
                "parentId": "11216",
                "avgRatingString": "4.7",
                "totalRatingsString": "283",
                "sla": {
                    "deliveryTime": 25,
                    "lastMileTravel": 1.9,
                    "serviceability": "SERVICEABLE",
                    "slaString": "20-30 mins",
                    "lastMileTravelString": "1.9 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-11-15 02:00:00",
                    "opened": true
                },
                "badges": {
                    "textExtendedBadges": [
                        {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "",
                                        "fontColor": "#7E808C",
                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                        "shortDescription": "options available"
                                    }
                                }
                            ]
                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹159"
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
                "context": "seo-data-f6942b28-4f6a-460e-8f9d-39a6e9ab7c96"
            },
            "cta": {
                "link": "https://www.swiggy.com/city/bangalore/leancrust-pizza-thincrust-experts-lakshmi-road-shanti-nagar-rest681612",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "788304",
                "name": "Wow! China",
                "cloudinaryImageId": "95982cfa57cb3b7e504f2015c375fd55",
                "locality": "Near Shanti Nagar Bus Stop",
                "areaName": "Shantinagar",
                "costForTwo": "₹400 for two",
                "cuisines": [
                    "Tibetan",
                    "Chinese",
                    "Asian",
                    "Snacks",
                    "Continental",
                    "Desserts",
                    "Beverages"
                ],
                "avgRating": 4,
                "parentId": "226836",
                "avgRatingString": "4.0",
                "totalRatingsString": "194",
                "sla": {
                    "deliveryTime": 32,
                    "lastMileTravel": 1.9,
                    "serviceability": "SERVICEABLE",
                    "slaString": "30-35 mins",
                    "lastMileTravelString": "1.9 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-11-14 23:00:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹149"
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
                "context": "seo-data-f6942b28-4f6a-460e-8f9d-39a6e9ab7c96"
            },
            "cta": {
                "link": "https://www.swiggy.com/city/bangalore/wow-china-near-shanti-nagar-bus-stop-shantinagar-rest788304",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "80118",
                "name": "Taco Bell",
                "cloudinaryImageId": "d3b3db238b6448c3f297c851e9d0b96b",
                "locality": "Ashok Nagar",
                "areaName": "Ashok Nagar",
                "costForTwo": "₹300 for two",
                "cuisines": [
                    "Mexican",
                    "Fast Food",
                    "Snacks"
                ],
                "avgRating": 4.4,
                "parentId": "1557",
                "avgRatingString": "4.4",
                "totalRatingsString": "7.6K+",
                "sla": {
                    "deliveryTime": 41,
                    "lastMileTravel": 3.8,
                    "serviceability": "SERVICEABLE",
                    "slaString": "40-45 mins",
                    "lastMileTravelString": "3.8 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-11-14 23:00:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "50% OFF",
                    "subHeader": "UPTO ₹100"
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
                        "rating": "4.1",
                        "ratingCount": "516"
                    },
                    "source": "GOOGLE",
                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
                "context": "seo-data-f6942b28-4f6a-460e-8f9d-39a6e9ab7c96"
            },
            "cta": {
                "link": "https://www.swiggy.com/city/bangalore/taco-bell-ashok-nagar-rest80118",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "16073",
                "name": "California Burrito",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/3/8e6326d5-8abb-432d-83be-cf6ebb6f09ff_16073.jpg",
                "locality": "Mantri Mall",
                "areaName": "Malleshwaram",
                "costForTwo": "₹250 for two",
                "cuisines": [
                    "Mexican",
                    "American",
                    "Salads",
                    "Continental",
                    "Keto",
                    "Healthy Food",
                    "Beverages",
                    "Snacks",
                    "Desserts",
                    "Fast Food"
                ],
                "avgRating": 4.6,
                "parentId": "1252",
                "avgRatingString": "4.6",
                "totalRatingsString": "16K+",
                "sla": {
                    "deliveryTime": 41,
                    "lastMileTravel": 5,
                    "serviceability": "SERVICEABLE",
                    "slaString": "40-45 mins",
                    "lastMileTravelString": "5.0 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-11-14 23:00:00",
                    "opened": true
                },
                "badges": {
                    "textExtendedBadges": [
                        {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "",
                                        "fontColor": "#7E808C",
                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                        "shortDescription": "options available"
                                    }
                                }
                            ]
                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "50% OFF",
                    "subHeader": "UPTO ₹100"
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
                        "rating": "4.6",
                        "ratingCount": "1.4K+"
                    },
                    "source": "GOOGLE",
                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
                "context": "seo-data-f6942b28-4f6a-460e-8f9d-39a6e9ab7c96"
            },
            "cta": {
                "link": "https://www.swiggy.com/city/bangalore/california-burrito-mantri-mall-malleshwaram-rest16073",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "426730",
                "name": "Theobroma",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/13/4de67475-37bd-4300-8cca-bee90fd2683b_426730.jpg",
                "locality": "Lavelle Road",
                "areaName": "Ashok Nagar",
                "costForTwo": "₹400 for two",
                "cuisines": [
                    "Desserts",
                    "Bakery",
                    "Beverages"
                ],
                "avgRating": 4.7,
                "parentId": "1040",
                "avgRatingString": "4.7",
                "totalRatingsString": "4.9K+",
                "sla": {
                    "deliveryTime": 29,
                    "lastMileTravel": 2.2,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25-30 mins",
                    "lastMileTravelString": "2.2 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-11-14 23:00:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "Rxawards/_CATEGORY-Desserts.png",
                            "description": "Delivery!"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "Delivery!",
                                        "imageId": "Rxawards/_CATEGORY-Desserts.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹99"
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
                        "rating": "4.1",
                        "ratingCount": "420"
                    },
                    "source": "GOOGLE",
                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
                "context": "seo-data-f6942b28-4f6a-460e-8f9d-39a6e9ab7c96"
            },
            "cta": {
                "link": "https://www.swiggy.com/city/bangalore/theobroma-lavelle-road-ashok-nagar-rest426730",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "697144",
                "name": "Baskin Robbins - Ice Cream Desserts",
                "cloudinaryImageId": "85ccae4e3576f9330af102c46ca85395",
                "locality": "GARUDA MALL",
                "areaName": "MAGARATH ROAD",
                "costForTwo": "₹250 for two",
                "cuisines": [
                    "Desserts",
                    "Ice Cream"
                ],
                "avgRating": 4.6,
                "veg": true,
                "parentId": "5588",
                "avgRatingString": "4.6",
                "totalRatingsString": "243",
                "sla": {
                    "deliveryTime": 44,
                    "lastMileTravel": 3.8,
                    "serviceability": "SERVICEABLE",
                    "slaString": "40-45 mins",
                    "lastMileTravelString": "3.8 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-11-14 23:00:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "50% OFF",
                    "subHeader": "UPTO ₹100"
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
                "context": "seo-data-f6942b28-4f6a-460e-8f9d-39a6e9ab7c96"
            },
            "cta": {
                "link": "https://www.swiggy.com/city/bangalore/baskin-robbins-ice-cream-desserts-garuda-mall-magarath-road-rest697144",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "396753",
                "name": "Wendy's Burgers",
                "cloudinaryImageId": "f1aa621021a2826088089b89842d4e7c",
                "locality": "KMK Towers",
                "areaName": "Residency Road",
                "costForTwo": "₹200 for two",
                "cuisines": [
                    "Burgers",
                    "American",
                    "Fast Food",
                    "Snacks"
                ],
                "avgRating": 4.3,
                "parentId": "972",
                "avgRatingString": "4.3",
                "totalRatingsString": "2.3K+",
                "sla": {
                    "deliveryTime": 29,
                    "lastMileTravel": 1.3,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25-30 mins",
                    "lastMileTravelString": "1.3 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-11-14 23:59:00",
                    "opened": true
                },
                "badges": {
                    "textExtendedBadges": [
                        {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "",
                                        "fontColor": "#7E808C",
                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                        "shortDescription": "options available"
                                    }
                                }
                            ]
                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹89"
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
                "context": "seo-data-f6942b28-4f6a-460e-8f9d-39a6e9ab7c96"
            },
            "cta": {
                "link": "https://www.swiggy.com/city/bangalore/wendys-burgers-kmk-towers-residency-road-rest396753",
                "type": "WEBLINK"
            }
        }
];
const ResCard = (props) => {
    const {resData} = props;
    const {cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla} = resData?.info
    console.log(resData)
    return (
        <div className="res-card">
            <img className="food-image" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} />
            <div className="res-info">
                <h4>{name}</h4>
                <span className={avgRating >= 4.5 ? 'rating rating-green' : avgRating >= 4.0 ? 'rating rating-yellow' : 'rating rating-red' }>{avgRating}</span>
            </div>
            
            <h5>{cuisines.toString()}</h5>
            <h5>{costForTwo}</h5>
            <h5>{sla.slaString}</h5>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {
                    resData.map(restaurant => <ResCard key={restaurant.info.id} resData={restaurant}/>)
                }
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
            {/* <Footer /> */}
        </div>
    )
}

const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<AppLayout />)