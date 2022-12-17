import { connect } from 'react-redux';
// import MovieCard from './MovieCard';

const MovieContainer = (props => {
    return (
        <div>
            {
                props.movies.map(item => {
                    return console.log(item);
                })
            }
        </div>
    )
})

const mapStateToProps = (state) => {
    return {
        movies: state.movies
    }
}

export default connect(mapStateToProps) (MovieContainer)