import Vue from 'vue';
import axios from 'axios';
import Vuex from 'vuex';

Vue.use(Vuex)

export function createStore() {
    return new Vuex.Store({
        state: {
            singlepost: [],
            alldata: [], // All data from the api
            editdata: [],// Get Edit data 
            SearchAll: [],
            status: '',
            token: '',
            user: {}
        },
        // Getters help to fetch the data from the templates 
        getters: {
            // Return All the data related to the api
            getAllData(state) {
                return state.alldata
            },
            getAllSearchData(state) {
                return state.SearchAll
            },
            getEditData(state) {
                return state.editdata
            },
            isLoggedIn: state => !!state.token,
            authStatus: state => state.status,
        },
        //getAllTableData();
        actions: {
            // Get all the data from the api
            getAllData(context, api) {
                axios.get(api)
                    .then((response) => {
                        context.commit('alldata', response.data.data)
                    })
            },
            login({ commit }, user) {
                return new Promise((resolve, reject) => {
                    commit('auth_request')
                    axios({ url: '/api/login-user', data: user, method: 'POST' })
                        .then(resp => {
                            const token = resp.data.token;
                            const user = resp.data.user;
                            Vue.$cookies.set('access_token', token);
                            Vue.$cookies.set('refresh_token', resp.data.refresh_token);
                            Vue.$cookies.set('user', user);
                            Vue.$cookies.set('login', 2);
                            localStorage.setItem('token', token)
                            axios.defaults.headers.common['Authorization'] = token
                            commit('auth_success', token, user)
                            resolve(resp)
                        })
                        .catch(err => {
                            commit('auth_error')
                            localStorage.removeItem('token')
                            reject(err)
                        })
                })
            },

            register({ commit }, user) {
                return new Promise((resolve, reject) => {
                    commit('auth_request')
                    axios({ url: '/api/register-user', data: user, method: 'POST' })
                        .then(resp => {
                            const token = resp.data.success.token
                            const user = resp.data.success.user
                            localStorage.setItem('token', token)
                            axios.defaults.headers.common['Authorization'] = token
                            commit('auth_success', token, user)
                            resolve(resp)
                        })
                        .catch(err => {
                            commit('auth_error', err)
                            localStorage.removeItem('token')
                            reject(err)
                        })
                })
            },

            logout({ commit }) {
                return new Promise((resolve, reject) => {
                    commit('logout')

                    localStorage.removeItem('token')
                    Vue.$cookies.set('login', 1);
                    delete axios.defaults.headers.common['Authorization']
                    resolve()
                })
            },
        },
        mutations: {
            // Return alll the data related to the api call
            alldata(state, data) {
                return state.alldata = data
            },
            auth_request(state) {
                state.status = 'loading'
            },
            auth_success(state, token, user) {
                state.status = 'success'
                state.token = token
                state.user = user
            },
            auth_error(state) {
                state.status = 'error'
            },
            logout(state) {
                state.status = ''
                state.token = ''
            },
        }
    })
}