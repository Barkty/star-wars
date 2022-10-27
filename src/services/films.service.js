import API from "../utils/API";

export const getFilms = async () => {

    try {
        
        const res = await API.get(`/films`)

        return res.data

    } catch (error) {
        
        throw error?.response
    }
}

export const getFilm = async (url) => {

    try {
        
        const res = await API.get(`${url}`)

        return res.data

    } catch (error) {
        
        throw error?.response
    }
}

export const getCharacters = async (url) => {

    let result = []

    for (let i = 0; i < url.length; i++) {

        const element = url[i];
        
        try {
        
            const res = await API.get(`${element}`)

            result.push(res.data)
    
        } catch (error) {
            
            throw error?.response
        }
    }

    return result
}