import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/slices/cartSlice";

const CartItemList = ({items}) => {
    {
        console.log(items)
    }

    return (
        <div>
            {
                items?.map((item) => {
                    return (
                        <div className="flex justify-between border-gray-300 border-b-2">
                            <div className="flex flex-col w-9/12 gap-1 my-2">
                                <span className="font-bold">{item?.name}</span>
                                <span className="text-sm">Rs. {item?.price / 100}</span>
                                <span className="text-sm">{item?.description}</span>
                            </div>
                            <div className="w-3/12 flex-col justify-center items-center">
                                <img src={CDN_URL + item?.imageId} className="w-14 h-auto" />
                                {/* <button className="w-4/12 cursor-pointer h-8 bg-blue-300 rounded-md" onClick={() => handleAdd(item?.card?.info)}>Add</button> */}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CartItemList;