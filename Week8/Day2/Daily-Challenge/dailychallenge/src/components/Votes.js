import React from 'react'
import Block from './Block'

class Votes extends React.Component {
    constructor() {
        super()
        }
        state = {
            languages : [
                {name: "Php", votes: 0},
                {name: "Python", votes: 0},
                {name: "JavaSript", votes: 0},
                {name: "Java", votes: 0}
            ]
          }

    langName = this.state.languages.map(language => {
        return <div key="name"><h1>{language.name}</h1></div>;
    })
    render() {
        return(
            <div>
                {this.langName}
                <Block score={this.state.languages[0]}/>
            </div>
        )
    }


}

export default Votes