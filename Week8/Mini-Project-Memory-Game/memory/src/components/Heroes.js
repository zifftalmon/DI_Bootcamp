import React, { Component } from 'react';

class Heroes extends Component {
    constructor(props) {
    super(props)
        this.state = {
            score: 0,
            topScore: 0,
            clicked: this.props.heroes.map(item => {
                return item.clicked
            }),
            image: this.props.heroes.map(item => {
                return item.image
            })
        }
    }

    handleClick = (e) => {
        if(this.props.heroes[e.target.id].clicked === false) {
            this.setState({score:this.state.score + 1})
            this.setState({clicked:this.props.heroes[e.target.id].clicked = true})
        }else{
            this.setState({topScore:this.state.score})
            this.setState({score:0})
            this.setState({clicked:this.props.heroes.map(item => { return item.clicked = false})})
        }
    }

    render() {
    return(
        <>
        <div className='scoreDiv'>
            <h1>superheroes memory game</h1>
            <h4>Score:{this.state.score} Top Score:{this.state.topScore}</h4>
        </div>
        <h2>Get points by clicking on an image but don't click on any more than once!</h2>
        <div className='container'>
            {
                this.props.heroes.map((item,i) => {
                    return(
                        <div key={item.id} className='heroDiv'>
                            <img value={this.state.clicked[i]} id={i} onClick={this.handleClick} alt={''} src={this.state.image[i]}/>
                            <h5>Name:{item.name}</h5>
                            <h5>occupation:{item.occupation}</h5>
                        </div>
                    )
                })
            }
        </div>
        </>
        )
    }
}


export default Heroes;