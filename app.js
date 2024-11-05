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

const onereactEle = <span>One React Element</span>

// React Element inside React Element, we can have functional component inside React Element too

const MultilineHeadingComponent1 = () => (
    <div id="container">
        <HeadingComponent/>
        {
            console.log(number)
        }
        <h2>{number}</h2>
        {heading}
        <h1 className="heading">Namaste React another Multiline functional component</h1>
    </div>
)

const reactEle = (
    <h1>Hello
        {onereactEle}
        <MultilineHeadingComponent1/>
    </h1>
);

// Functional Component
// 3 ways for single line code
// 1
const HeadingComponent = () => {
    return <h1 className="head">Namaste React Functional Component</h1>;
}
//2
const HeadingComponent1 = () => (
    <h1>Type 2 heading</h1>
)
//3
const HeadingComponent2 = () => <h1>Type 3</h1>

// We can use normal functions too
const NormalFunction = function() {
    return (
        <h1>Normal Function</h1>
    )
}


// below piece of code depicts multiline functional component
// it also depicts nesting of components (Component Composition)
// JS expression inside JSX
// even React Element can be put inside JSX
const number = 1000;
const MultilineHeadingComponent = () => (
    <div id="container">
        <HeadingComponent/>
        {
            console.log(number)
        }
        <h2>{number}</h2>
        {heading}
        {reactEle}
        <h1 className="heading">Namaste React Multiline functional component</h1>
    </div>
)

root.render(<MultilineHeadingComponent/>);