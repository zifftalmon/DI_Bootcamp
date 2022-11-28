import React from "react";

class Color extends React.Component {
    constructor () {
        super()
    }

    state= {
        favoriteColor: "red"
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({favoriteColor: "yellow"})
        }, 5000)
    }

    changeToBlue = () => {
        this.setState({favoriteColor: "blue"})
    }

    render() {
        return (
            <div>
                <h1>my favorite color is {this.state.favoriteColor}</h1>
                <button onClick={this.changeToBlue}>click to blue</button>
            </div>
        )
    }
}

export default Color