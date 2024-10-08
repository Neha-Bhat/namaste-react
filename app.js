import React from "react";
import ReactDOM  from "react-dom/client";

const headingReact = React.createElement("h1", {id: "headingId"}, "Hello from React"); //returns an element - a JS object
const rooot = ReactDOM.createRoot(document.getElementById("root"));
rooot.render(headingReact);