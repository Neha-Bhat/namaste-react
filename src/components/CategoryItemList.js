import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/slices/cartSlice";

const CategoryItemList = ({items}) => {

    const dispatch = useDispatch();

    const handleAdd = (item) => {
        dispatch(addItem(item))
    }

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
                            <div className="w-3/12 flex-col justify-center items-center">
                                <img src={CDN_URL + item?.card?.info?.imageId} className="w-14 h-auto" />
                                <button className="w-4/12 cursor-pointer h-8 bg-blue-300 rounded-md" onClick={() => handleAdd(item?.card?.info)}>Add</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CategoryItemList;