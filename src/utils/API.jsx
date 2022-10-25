import axios from 'axios'

const baseURL = 'https://swapi.dev/api'

const API = axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
    },
});

API.interceptors.request.use((request) => {

  // const token = sessionStorage.getItem("token");
  // if (token) {
  //   request.headers.Authorization = `Bearer ${token}`;
  // }
  
  return request;
});

API.interceptors.response.use((response) => {
    // console.log(response);
    return response;
})

export default API;