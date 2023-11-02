import request from '../utils/request'
import { loginData } from '../utils/request'

export const login = (data: loginData) => {
    return request('/login/zks', 'post', data)
}