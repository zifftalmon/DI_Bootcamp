import React, { Component } from 'react';
import 'tachyons'

class List extends Component {
    constructor() {
        super()
        this.state = {
            todos:['buy some milk', 'do my homework']
        }
    }

    handleSubmit= (e) => {
        if(e.key === 'Enter') {
            this.setState({todos:[...this.state.todos, e.target.value]})
        }
    }

    deleteItem = (e) => {
        const arr = [...this.state.todos]
        let index = arr.indexOf(e.target.value)
        if(index !== 0) {
            arr.splice(index, 1)
            this.setState({todos:arr})
        }
    }

    render() {
        return (
            <div className='container'>
                {
                    this.state.todos.map((item,i) => {
                        return (
                            <div className='listDiv'>
                                <div key={i} className='taskDiv'>
                                <h3 id={i} onClick={this.deleteItem}>{item}</h3>
                                </div>
                            </div>
                        )
                    })
                }
                <div className='inputText'>
                <h3 for='task' className='tl'>add a new todo:</h3>
                </div>
                <input id='task' className='input' onKeyDown={this.handleSubmit} type='text' name='todos' />
            </div>
        );
    }
}

export default List;