import axios from 'axios'
const baseUrl = 'http://localhost:3001/cards'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => {
        return response.data
    })
}

const create = async (newObject) => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

export default { create, getAll }