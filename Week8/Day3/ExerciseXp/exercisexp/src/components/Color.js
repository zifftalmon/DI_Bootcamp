import React from "react";

// class Color extends React.Component {
//     constructor (props) {
//         super(props);
//         this.state= {
//             favoriteColor: "red",
//             show: true
//         }
//     }
    
//     shouldComponentUpdate() {
//         return this.state.favoriteColor === "red" 
//     }

//     componentDidMount() {
//         setTimeout(() => {
//             this.setState({favoriteColor: "yellow"})
//         }, 5000)
//     }
    
//     componentDidUpdate() {
//         return this.state.favoriteColor === "yellow"
//     }

//     getSnapshotBeforeUpdate() {
//         return this.state.favoriteColor !== "red" 
//     }

//     changeToBlue = () => {
//         this.setState({favoriteColor: "blue"})
//     }
//     render() {  
//         if(this.componentDidUpdate && this.getSnapshotBeforeUpdate) {
//             return(
//             <div>
//                 <h1>my favorite color is {this.state.favoriteColor}</h1>
//                 <h2>before the update my color was red, after update my color is yellow</h2>
//             </div>
//             )
//         }
//         return (
//             <div>
//                 <h1>my favorite color is {this.state.favoriteColor}</h1>
//                 <button onClick={this.changeToBlue}>click to blue</button>
//         </div>
//         )
//     }
// }

class Child extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true
        }
    }

    
    
    delete = () => {
        this.setState({show: false})
    }
    
    componentWillUnmount() {
        if(this.state.show === false) {
            alert('this header is about to be unmounted')
        }
    }

    render() {
    if(this.state.show){
    return ( 
        <div>
            <h1>hello world</h1>
            <button onClick={this.delete}>delete header</button>
        </div>
     )
    } else {
        this.componentWillUnmount()
    }

        return(
        <button>delete header</button>
        )
    }
}

export default Child