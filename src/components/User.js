import { useState } from 'react';

const User = ({name, location}) => {
    const [count] = useState(0);
    return (
        <div className="user">
            <p>Count: {count}</p>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h3>Contact: neha.1994@zmail.com</h3>
        </div>
    )
}

export default User;