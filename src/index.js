import api from './api'

import Promise from 'promise';

export default {
    api: () => {
        return new Promise((resolve, reject) => {
            api.get()
            .then((response) => {
                resolve(response['data']);
            })
        })
    }
}