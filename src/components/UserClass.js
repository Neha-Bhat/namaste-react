import React from 'react'
class UserClass extends React.Component {
    constructor(props) {
        
        super(props)
        console.log(this.props.name+ "child constructor")
        this.state = {
            userInfo: {
                name: 'dummyName',
                location: 'dummyLocation'
            }
        }
    }
    render() {
        console.log(this.props.name+"child render")
        const {name, location, avatar_url} = this.state.userInfo;
        const {count} = this.state;
        return (
            <div className="user">
                <img src={avatar_url} height={50}/>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h3>Contact: neha.1994@zmail.com</h3>
            </div>
        )
    }

    async componentDidMount() {
        console.log(this.props.name+"child componentDidMount")
        const user = await fetch('https://api.github.com/users/Neha-Bhat');
        const data = await user.json();
        this.setState({
            userInfo: data
        })
    }

    componentDidUpdate() {
        console.log("componentDidUpdate")
    }

    componentWillUnmount() {
        console.log("componentWillUnmount")
    }
}

export default UserClass;