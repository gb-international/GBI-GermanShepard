import axios from 'axios'

export default {

    fetchItem(payload) {
        return axios.get('https://jsonplaceholder.typicode.com/todos/1', payload).then((response) => {
            console.log(response);
            return response.data;
        })
    }
}