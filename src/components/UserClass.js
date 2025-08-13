import React from 'react'
class UserClass extends React.Component {
    constructor(props) {
        
        super(props)
        console.log(this.props.name+ "child constructor")
        this.state = {
            count: 0
        }
    }
    render() {
        console.log(this.props.name+"child render")
        const {name, location} = this.props;
        const {count} = this.state;
        return (
            <div className="user">
                <p>Count: {count}</p>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count+1
                    })
                }}>Increase count</button>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h3>Contact: neha.1994@zmail.com</h3>
            </div>
        )
    }

    componentDidMount() {
        console.log(this.props.name+"child componentDidMount")
    }
}

export default UserClass;