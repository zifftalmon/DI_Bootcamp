import React from 'react'
import {connect} from 'react-redux'
import { searchMovie, fetchMovie } from '../redux/action'

class SearchForm extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            title:'',
            movies:[],
        }
    }

    handleChange = (e) => {
        this.setState({title:e.target.value})
        
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.searchMovie(this.state.title)
        // fetch(`http://www.omdbapi.com/?t=${this.props.text}&apikey=b6ba7a0b`)
        // .then(res => res.json())
        // .then(data => this.props.fetchMovies(data))
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type='text' name='movie' placeholder='Search Movies, TV Series...'/>
                    <input type='submit' value='search'/>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('state movies:', state.movies);
    return {
        text: state.text,
        movies: state.movies
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        searchMovie: (val) => dispatch(searchMovie(val)),
        fetchMovies: (arr) => dispatch(fetchMovie(arr))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (SearchForm)