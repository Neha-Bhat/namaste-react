import React from "react";
import ReactDOM  from "react-dom/client";

// const headingReact = React.createElement("h1", {id: "headingId"}, "Hello from React"); //returns an element - a JS object
// const rooot = ReactDOM.createRoot(document.getElementById("root"));
// rooot.render(headingReact);

// JSX
const jsxHeading = <h1 id="headingId">Namaste React in JSX</h1>
console.log(jsxHeading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);

// React Element
const heading = (
    <h1>React Element</h1>
);

// Functional Component
const HeadingComponent = () => {
    return <h1>Namaste React Functional Component</h1>;
}

const MultilineHeadingComponent = () => (
    <div id="container">
        <h1 className="heading">Namaste React Multiline functional component</h1>
    </div>
)

root.render(<MultilineHeadingComponent/>);