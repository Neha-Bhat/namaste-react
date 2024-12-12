import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Header = () => {
    const [btnLogin, setBtnLogin] = useState("Login")
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-container">
                <ul className="nav-items">
                    <li>Home</li>
                    <li>Contact Us</li>
                    <li>About Us</li>
                    <li>Cart</li>
                    <li><button onClick={() => {
                        btnLogin === 'Login' ? setBtnLogin('Logout') : setBtnLogin('Login');
                    }}>{btnLogin}</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;