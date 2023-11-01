import axios from "axios";
import { log } from "console";



const instace = axios.create({
    baseURL: 'https://www.fastmock.site/mock/bf1fcb3c2e2945669c2c8d0ecb8009b8/api',
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

type method = "get" | "post"
export default function request(url: string, method: method, submit: object) {
    return instace({
        url,
        method,
        [method.toLowerCase() === 'get' ? 'params' : 'data']: submit
    })
}