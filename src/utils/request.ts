import axios from "axios";
const instace = axios.create({
    baseURL: 'https://www.fastmock.site/mock/b77548bdda96893b23d759d9655d05c4/lgoin',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json;charest=utf-8'
    }
})

instace.interceptors.request.use(config => {
    config.headers = config.headers || {}

    if (localStorage.getItem('token')) {
        config.headers.token = localStorage.getItem('token') || ''
    }

    return config
})
instace.interceptors.response.use(res => {
    if (res.data.code === 200) {
        return res.data
    } else {
        return Promise.reject(res.data)
    }



}, (err) => {
    console.log(err);

    return Promise.reject(err);
})

export interface loginData {
    name: string
    password: string | number
}
type method = "get" | "post"


export default function request(url: string, method: method, submit?: loginData) {
    return instace({
        url,
        method,
        [method.toLowerCase() === 'get' ? 'params' : 'data']: submit
    })
}