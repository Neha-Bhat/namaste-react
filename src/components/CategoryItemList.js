import { CDN_URL } from "../utils/constants";

const CategoryItemList = ({items}) => {
    return (
        <div>
            {
                items?.map((item) => {
                    return (
                        <div className="flex justify-between border-gray-300 border-b-2">
                            <div className="flex flex-col w-9/12 gap-1 my-2">
                                <span className="font-bold">{item?.card?.info?.name}</span>
                                <span className="text-sm">Rs. {item?.card?.info?.price / 100}</span>
                                <span className="text-sm">{item?.card?.info?.description}</span>
                            </div>
                            <div className="w-3/12 flex justify-center items-center">
                                <img src={CDN_URL + item?.card?.info?.imageId} className="w-14 h-auto" />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CategoryItemList;