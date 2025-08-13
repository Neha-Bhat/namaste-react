import React from 'react';
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
    constructor(props) {
        super(props)
        console.log("Parent constructor")
    }

    render() {
        console.log("Parent render")
        return (
        <div>
            <h1>Namaste Cafe</h1>
            {/* <User name="Neha (functional component)" location="Bengaluru Function" /> */}
            <UserClass name="Neha (class based component)" location="Bangalore Class" />
            {/* <UserClass name="Varadha (class based component)" location="Bangalore Class" /> */}
        </div>
    )
    }

    // componentDidMount() {
    //     console.log("Parent componentDidMount")
    // }
}

// const About = () => {
//     return (
//         <div>
//             <h1>Namaste Cafe</h1>
//             {/* <User name="Neha (functional component)" location="Bengaluru Function" /> */}
//             <UserClass name="Neha (class based component)" location="Bangalore Class" />
//         </div>
//     )
// }

export default About;