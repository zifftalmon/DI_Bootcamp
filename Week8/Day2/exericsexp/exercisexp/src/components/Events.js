import React from "react";


class Events extends React.Component {
    constructor(props) {
        super(props)
        this.alertMe = this.alertMe.bind(this)
        this.handleKeyPress = this.handleKeyPress.bind(this)
    }
    state = {
        isToggleOn: true,
    }



    alertMe = () => {
        alert("i was clicked")   
    }

    handleKeyPress = (e) => {
        if(e.which === 13) {
            alert(`the Enter key was pressed, your input is: ${e.target.value}`)
        }
        
    }
    changeButton = (e) => {
        console.log(this.state.isToggleOn);
        this.setState({isToggleOn: false})
        if(this.state.isToggleOn === false) {
            e.target.innerText = "off"
        }
    }
    
    
    render() {
        return (
            <div>
                <button onClick={this.alertMe}>click me</button>
                <input onKeyPress={this.handleKeyPress} placeholder="press the ENTER key!"></input>
                <button onClick={this.changeButton}>on</button>
            </div>
        )
    }
}

export default Events