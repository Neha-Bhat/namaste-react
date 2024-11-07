import React from "react";
import ReactDOM  from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://th.bing.com/th/id/OIP.uZ2JtS-P27KGz_YIX8lTgQAAAA?w=161&h=180&c=7&r=0&o=5&pid=1.7"/>
            </div>
            <div className="nav-container">
                <ul className="nav-items">
                    <li>Home</li>
                    <li>Contact Us</li>
                    <li>About Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const ResCard = () => {
    return (
        <div className="res-card">
            <img className="food-image" src="https://vinayasculinarydelights.com/wp-content/uploads/2020/11/IMG_20201128_111556__01-03.jpeg" />
            <h3>Vidyarthi Bhavan</h3>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <ResCard />
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<AppLayout />)