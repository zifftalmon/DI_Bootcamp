import React from "react";

class Phone extends React.Component {
    constructor () {
        super()
        this.state = {
            brand: "Samsung",
            model: "Galaxy S20",
            color: "black",
            year: 2020
        }
    }

    
    state ={
        state : this.state
    }
    changeColor = () => {
        this.setState({color: "blue"})
    }
    
    render() {
        return (
        <div>
            <h1>my phone is a {this.state.brand}</h1>
            <h3>it is a {this.state.color} {this.state.model} from {this.state.year}</h3>
            <button onClick={this.changeColor}>click</button>
        </div>
        )
    }


}
export default Phone