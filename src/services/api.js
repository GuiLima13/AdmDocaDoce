import axios from 'axios';

const api = axios.create({
    baseURL:'http://apidocadoce.herokuapp.com'
});

export default api;