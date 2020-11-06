import Vue from 'vue'
const apiBaseUrl = 'http://localhost:8000/escort';
export default {
    get(url, request) {
        return axios.get( apiBaseUrl+ url, request)
            .then((response) => Promise.resolve(response.data))
            .catch((error) => Promise.reject(error));
    },
    post(url, request) {
        return axios.post(apiBaseUrl + url, request)
            .then((response) => Promise.resolve(response))
            .catch((error) => Promise.reject(error));
    },
    patch(url, request) {
        return axios.patch(apiBaseUrl + url, request)
            .then((response) => Promise.resolve(response))
            .catch((error) => Promise.reject(error));
    },
    delete(url, request) {
        return axios.delete(apiBaseUrl + url, request)
            .then((response) => Promise.resolve(response))
            .catch((error) => Promise.reject(error));
    }
}