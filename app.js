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
            <img className="food-image" src="https://b.zmtcdn.com/data/pictures/chains/0/18924790/11622036dde0d49cc0dc77cf266983ff_o2_featured_v2.jpg" />
            <div className="res-info">
                <h3>Namaste</h3>
                <span className="rating">4.3</span>
            </div>
            
            <h4>South Indian</h4>
            <h4>INR 100 for one</h4>
            <b>26 min</b>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <ResCard />
                <ResCard />
                <ResCard />
                <ResCard />
                <ResCard />
                <ResCard />
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