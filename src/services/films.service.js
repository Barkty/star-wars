import API from "../utils/API";

export const getFilms = async () => {

    try {
        
        const res = await API.get(`/films`)

        return res.data

    } catch (error) {
        
        throw error?.response
    }
}