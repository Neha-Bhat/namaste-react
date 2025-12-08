// Custom hook to maintain state and make API call to get restaurant details

import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

const useRestaurantMenu  = ((resID) => {
    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        fetchData();
    }, [])
    
    const fetchData = (async () => {
        const response = await fetch(MENU_URL+resID);
        const json = await response.json();
        setResInfo(json.data);
    })
    return resInfo;
});
export default useRestaurantMenu;