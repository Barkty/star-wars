import { useReducer } from "react";
import { GET_MOVIES, GET_MOVIE_CHARACTERS, GET_SINGLE_MOVIE } from "./AppActions";
import AppContext from "./appContext";
import appReducer from "./appReducer";

let starWarsMovies = JSON.parse(sessionStorage.getItem('movies')) || []
let singleMovie = JSON.parse(sessionStorage.getItem('movie')) || null
let movieCast = JSON.parse(sessionStorage.getItem('casts')) || []

const initialState = {
    movieCast: movieCast,
    starWarsMovies: starWarsMovies,
    singleMovie: singleMovie
}

const AppState = ({children}) => {
    const [state, dispatch] = useReducer(appReducer, initialState);

    const getMovies = (allMovies) => {
        dispatch({
            type: GET_MOVIES,
            payload: allMovies
        })
    }

    const getMovie = (movie) => {
        dispatch({
            type: GET_SINGLE_MOVIE,
            payload: movie
        })
    }

    const getMovieCast = (cast) => {
        dispatch({
            type: GET_MOVIE_CHARACTERS,
            payload: cast
        })
    }


    return (
        <AppContext.Provider value={{...state, getMovies, getMovie, getMovieCast}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppState