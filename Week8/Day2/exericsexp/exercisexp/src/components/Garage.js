import React from "react";

class Garage extends React.Component {
    constructor (size) {
        super();
        this.size = size
    }
    state = {
        size:this.size
    }

    render() {
        return (
            <h1>who lives im my {this.state.size} garage?</h1>
        )
    }
}

export default Garage