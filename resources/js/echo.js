import Vue from 'vue'
import Echo from 'laravel-echo'
import Cookies from 'js-cookie'

window.io = require('socket.io-client')

export var echo_instance = new Echo({
  broadcaster: "socket.io",
  host: 'http://localhost:6001',
 /* auth: {
    headers: {
      Authorization: "Bearer " + Cookies.get('access_token')
    }
  }*/
})

Vue.prototype.$echo = echo_instance

export default Vue