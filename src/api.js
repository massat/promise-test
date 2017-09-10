import axios from 'axios';

export default {
    get: () => {
        return axios.get('/path/to/api');
    }
}