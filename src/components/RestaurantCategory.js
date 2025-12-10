import CategoryItemList from './CategoryItemList';
import { useState } from 'react';

const RestaurantCategory = ({cardData}) => {
    const [showCategoryItems, setShowCategoryItems] = useState(false);
    if(cardData !== undefined) {
        console.log(cardData)
        return (
        <div className="w-full">
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg">
                <div className="p-4 flex justify-between" onClick={() => setShowCategoryItems(!showCategoryItems)}>
                    <span className="font-bold text-lg">{cardData?.title} ({cardData?.itemCards?.length})</span>
                    <span>⬇️</span>
                </div>
                <div className="p-4">
                    {
                        showCategoryItems ? (<CategoryItemList items={cardData?.itemCards} />) : ''
                    }
                </div>
            </div>

        </div>
    )
    }
};

export default RestaurantCategory;