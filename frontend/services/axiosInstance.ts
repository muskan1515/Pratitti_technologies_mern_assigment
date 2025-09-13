import axios from 'axios'

const client = axios.create({
    baseURL: "http://localhost:8000",
    withCredentials: true
})

client.interceptors.request.use(
    (config) => {
        let token = localStorage.getItem('token')
        if(token){
            config.headers.Authorization = `Bearer ${token}`
        }
        return config

    },
    (error) => {
         Promise.reject(error)
    }
)

client.interceptors.response.use(
    (response) => response,
    (error) => {
        //can perform the redirection also here
         Promise.reject(error)
    }
)

export default client