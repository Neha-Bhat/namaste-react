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

const Footer = () => {
    return (
        <div className="footer">
            <span><i>Namaste Food</i></span>
        </div>
    )
};

const ResCard = (props) => {
    return (
        <div className="res-card">
            <img className="food-image" src={props.thumbnail} />
            <div className="res-info">
                <h3>{props.resName}</h3>
                <span className="rating">{props.rating}</span>
            </div>
            
            <h4>{props.cuisine}</h4>
            <h4>{props.price}</h4>
            <b>{props.eta}</b>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <ResCard resName="Namaste" cuisine="South Indian" thumbnail="https://b.zmtcdn.com/data/pictures/chains/0/18924790/11622036dde0d49cc0dc77cf266983ff_o2_featured_v2.jpg" rating="4.3" price="INR 100 for one" eta="26 min"/>
                <ResCard resName="Ibaco" cuisine="Desserts, Ice cream" thumbnail="https://b.zmtcdn.com/data/pictures/chains/8/53198/995145af92d5d5004cc7e180d4d104c1_o2_featured_v2.jpg" rating="4.0" price="INR 150 for one" eta="20 min"/>
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
            <Footer />
        </div>
    )
}

const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<AppLayout />)