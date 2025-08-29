import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
    const [btnLogin, setBtnLogin] = useState("Login");
    const isOnline = useOnlineStatus();
    return (
        <div className="flex justify-between bg-pink-100 shadow-lg m-2">
            <div className="logo-container">
                <img className="w-22" src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4 gap-3">
                    <li>{isOnline ? '🟢' : '🔴'}</li>
                    <li><Link to="/" className="item">Home</Link></li>
                    <li><Link to="/contact" className="item">Contact Us</Link></li>
                    <li><Link to="about" className="item">About Us</Link></li>
                    {/* <Link>Cart</Link> */}
                    <li><Link><button onClick={() => {
                        btnLogin === 'Login' ? setBtnLogin('Logout') : setBtnLogin('Login');
                    }}>{btnLogin}</button></Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;