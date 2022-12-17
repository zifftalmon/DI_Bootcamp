export const SEARCH_MOVIE = 'SEARCH_MOVIE'
export const FETCH_MOVIES = 'FETCH_MOVIES'
export const FETCH_MOVIE = 'FETCH_MOVIE' 
export const LOADING = 'LOADING'

export const searchMovie = (val) => {
    return {
        type:SEARCH_MOVIE,
        payload:val
    }
} 

export const fetchMovie = (arr) => {
    return {
        type:FETCH_MOVIES,
        payload:arr
    }
}