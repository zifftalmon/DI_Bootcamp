import { Route,Routes,Link } from 'react-router-dom';
import React from 'react'
import { createClient } from 'pexels';


class Gallery extends React.Component {
    constructor () {
        super()
        this.state = {
            query:'Flowers',
            photos:[]
        }
        // this.componentDidMount()
    }
    Snapshot = () => {
        return (
            <h2>Home</h2>
            )
        }
        
        Lizards = () => {
        return(
            <h2>Lizards</h2>
        )
    }

    Plants = () => {
        return(
            <h2>Plants</h2>
        )
    }

    Hamburgers = () => {
        return(
            <h2>Hamburgers</h2>
        )
    }

    Towers = () => {
        return(
            <h2>Towers</h2>
        )
    }

    handleSubmit = (e) => {
        this.setState({query:e.target.text})
    }
    
    componentDidMount() {
        const client = createClient('563492ad6f91700001000001ac6332983b544e46924272837db2c879');
        const getPhotos = async() => {
            const call = await fetch(`https://api.pexels.com/v1/search?query=${this.state.query}`,{
                mode:'no-cors',
                headers: {
                    Authorization: client
                }
            })
            const res = await call.json()
            this.setState({photos:res.photos})
        }
        getPhotos()
    }

    render() {
        return (
        <>
            <div>
                <h1>snapshot</h1>
                <input type='text'/>
                <button type='submit'>search</button>
                <div><Link onClick={this.handleSubmit} to='/lizards'>Lizards</Link></div>
                <div><Link onClick={this.handleSubmit} to='/plants'>Plants</Link></div>
                <div><Link onClick={this.handleSubmit} to='/hamburgers'>Hamburgers</Link></div>
                <div><Link onClick={this.handleSubmit} to='/towers'>Towers</Link></div>
                {
                    this.state.photos.map(item => {
                        return (
                            <div className='imgDiv' key={item.id}>
                                <img alt='img' src={item.src.original}/>
                            </div>
                        )
                    })
                }
            <Routes>
                <Route exact path='/' element={<this.Snapshot/>}/>
                <Route path='/lizards' element={<this.Lizards/>}/>
                <Route path='/plants' element={<this.Plants/>}/>
                <Route path='/hamburgers' element={<this.Hamburgers/>}/>
                <Route path='/towers' element={<this.Towers/>}/>
            </Routes>
            </div>
        </>
        );

    }
}

export default Gallery;