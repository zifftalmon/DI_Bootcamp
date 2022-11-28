import React from  'react'
import Garage from './Garage';

class Car extends React.Component {
    constructor (props) {
        super(); 
    }
    state = {
        color: "blue",
    }

    render() {
        return (
            <div>
                <h1>this car is a {this.state.color} {this.props.car.model}</h1>
                <Garage/>
            </div>
        )
    }
}

export default Car