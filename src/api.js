import axios from 'axios';

export default (id) => {
    return axios.get('/path/to/api', {params: {id: id}});
}