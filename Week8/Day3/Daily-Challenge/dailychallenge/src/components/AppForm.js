import React from 'react'
import './AppForm.css'

class AppFrom extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            option: "",
            diet1: "no",
            diet2: "no",
            diet3: "no"
        }
    }

    handleInput = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleCheck = (e) => {
        (e.target.checked) ? 
        this.setState({[e.target.name]: "yes"})
        :
        this.setState({[e.target.name] : "no"})

    }

    render() {
        return(
            <>
            <div>
            <h1>sample form</h1>
            </div>
            <div className='formDiv'>
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleInput} type="text" name="firstName" placeholder="First Name"/><br/>
                <input onChange={this.handleInput} type="text" name="lastName" placeholder="Last Name"/><br/>
                <input onChange={this.handleInput} type="text" name="age" placeholder="Age"/><br/>
                
                <br></br>

                <div onChange={this.handleInput}>
                <input type="radio" name="gender" value="male"/>Male<br/>
                <input type="radio" name="gender" value="female"/>Female<br/>
                </div>

                <h3>Select your destination</h3>
                
                <select name="option" onChange={this.handleInput}>
                    <option value="none">--Please Choose a destination--</option>
                    <option value="Honolulu">Honolulu</option>
                    <option value="New York">New York</option>
                </select>

                <h3>Dietary Restrictions</h3>
                <input onChange={this.handleCheck} type="checkbox" name="diet1" value="nuts free"/>Nuts Free<br/>
                <input onChange={this.handleCheck} type="checkbox" name="diet2" value="lactose free"/>Lactose Free<br/>
                <input onChange={this.handleCheck} type="checkbox" name="diet3" value="vegan"/>Vegan<br/>

                <input type="submit" value="Submit"></input>
                </form>
                </div>

                <hr></hr>
                
                <div className='infoDiv'>
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.option}</p>
                <p>Your dietary restrictions:</p>

                <p>**Nuts free:{this.state.diet1}</p>
                <p>**Lactose free:{this.state.diet2}</p>
                <p>**Vegan:{this.state.diet3}</p>
                </div>
            </>
        )
    }
}

export default AppFrom