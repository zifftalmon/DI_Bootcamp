import './App.css';
import React from 'react';
import './components/Block.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      languages : [
        {name: "Php", votes: 0 ,},
        {name: "Python", votes: 0},
        {name: "JavaSript", votes: 0},
        {name: "Java", votes: 0}
    ]
    }
  }

  changeScore = (elem) => {
    elem.votes++
    this.setState({languages: [...this.state.languages]})
  }
  
  render() {
    return(
      <div>
      {
        this.state.languages.map((language) => {
          return (
            <div className='flexDiv'>
            <p>{language.votes}</p>
            <h1>{language.name}</h1>
            <button onClick={() => this.changeScore(language)}>vote here</button>
            </div>
            )
          })
        }
      </div>
    )
  }
}


export default App;
