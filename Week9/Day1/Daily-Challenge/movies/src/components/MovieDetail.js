import { connect } from "react-redux";

const movieDetail = props => {
    return (
        <div>
            <h1>movie detail</h1>
            <h2>title:{props.detail.title}</h2>
            <h2>release date:{props.detail.releaseDate}</h2>
            <h2>rating:{props.detail.rating}</h2>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        detail: state.movieDetail
    }
}

export default connect(mapStateToProps)(movieDetail)