import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
    const [btnLogin, setBtnLogin] = useState("Login");
    const isOnline = useOnlineStatus();
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-container">
                <ul className="nav-items">
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