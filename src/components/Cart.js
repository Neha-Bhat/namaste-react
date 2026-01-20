import { useDispatch, useSelector } from "react-redux";
import CartItemList from "./CartItemList";
import { clearCart } from "../utils/slices/cartSlice";

const Cart = () => {

    const dispatch = useDispatch();

    const handleClear = () => {
        dispatch(clearCart())
    }
    const cartItems = useSelector(store => store?.cart?.items)
    console.log(cartItems)
    return (
        <div className="p-10 flex-col">
            {
                cartItems?.length > 0 ? (
                    <div className="flex-col w-6/12 m-auto">
                        <CartItemList items={cartItems} />
                        <div className="flex justify-between items-center">
                            <button className="w-2/12 cursor-pointer h-8 bg-green-300 rounded-md">Order Now</button>
                            <button className="w-2/12 cursor-pointer h-8 bg-red-300 text-white rounded-md" onClick={handleClear}>Clear Cart</button>
                        </div>
                    </div>
                ) : (
                    <div className="w-full m-auto">
                        <p className="font-bold size-14 w-full">Your cart is empty!</p>
                    </div>
                )
            }
            
        </div>
    )
}

export default Cart;