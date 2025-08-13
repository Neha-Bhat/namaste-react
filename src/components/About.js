import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
            <h1>Namaste Cafe</h1>
            <User name="Neha (functional component)" location="Bengaluru Function" />
            <UserClass name="Neha (class based component)" location="Bangalore Class" />
        </div>
    )
}

export default About;