import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data: [],
    }
  }
  async componentDidMount() {
    const call = await fetch('http://localhost:5000/api/hello')
    const res = await call.json()
    this.setState({data:[res]})
    }

    async sendData (e) {
      e.preventDefault();
      const req = await fetch('http://localhost:5000/api/world', {
        method:'POST',
        headers: {
          'Content-Type':'application/json'
        },
        body:JSON.stringify({"post":e.target[0].value})
        })
      const resp = await req.json()
      const form = document.getElementById("formText")
      form.innerText = `this is what you sent me ${resp.post}`
    }

  
  render() {
    return (
      <div className="App">
      {this.state.data.map(msg => {
        return(
          <div key={""}>
            <h1>{msg}</h1>
          </div>
        )
      })}
      <h1>Post to Server:</h1>
      <form id="form" onSubmit={this.sendData}>
      <input type="text" name="postData"/>
      <button type="submit">submit</button>
      <h1 id="formText"> </h1>
      </form>
      </div>
    );
  }
}



export default App;
