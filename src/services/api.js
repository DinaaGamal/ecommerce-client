const axios = require('axios');
const baseURL = process.env.REACT_APP_BASE_URL || 'http://localhost:3000'

module.exports = {
    register(user){
        return axios.post(`${baseURL}/users/signup`,user).then(res => res.data)
    },
    login(credentials){
        return axios.post(`${baseURL}/users/signin`,credentials).then(res => res.data)
    },

} 