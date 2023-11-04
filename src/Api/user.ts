import request from "../utils/request"


export const getUser = function () {
    return request('/user', 'get');
}
export const getrole = function () {
    return request('/roleList', 'get')
}