import { GET_MOVIES, GET_SINGLE_MOVIE, GET_MOVIE_CHARACTERS } from "./AppActions";

const appReducer = (state, action) => {
    switch (action.type) {
        case GET_MOVIES:
            sessionStorage.setItem('movies', JSON.stringify(action.payload));

        return {
            ...state,
            movies: action.payload,
        }

        case GET_SINGLE_MOVIE: 
            sessionStorage.setItem('movie', JSON.stringify(action.payload));

        return {
            ...state,
            singleMovie: action.payload,
        }

        case GET_MOVIE_CHARACTERS: 
            sessionStorage.setItem('casts', JSON.stringify(action.payload));

        return {
            ...state,
            movieCast: action.payload,
        }

        default:
            return state
    }
}

export default appReducer