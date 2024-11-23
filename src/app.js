import React from "react";
import ReactDOM  from "react-dom/client";
import Header from './components/Header';
import Footer from "./components/Footer";
import Body from "./components/Body";

function truncateText(str, maxLength) {
  return  str.length > maxLength ? str.slice(0, maxLength)+('...') : str
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
            {/* <Footer /> */}
        </div>
    )
}

const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<AppLayout />)