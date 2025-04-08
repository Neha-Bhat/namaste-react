import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router";
const Header = () => {
    const [btnLogin, setBtnLogin] = useState("Login")
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-container">
                <ul className="nav-items">
                    <Link to="/" className="item">Home</Link>
                    <Link to="/contact" className="item">Contact Us</Link>
                    <Link to="about" className="item">About Us</Link>
                    {/* <Link>Cart</Link> */}
                    <Link><button onClick={() => {
                        btnLogin === 'Login' ? setBtnLogin('Logout') : setBtnLogin('Login');
                    }}>{btnLogin}</button></Link>
                </ul>
            </div>
        </div>
    )
}

export default Header;