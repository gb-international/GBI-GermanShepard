import Vue from 'vue';
import axios from 'axios';
import Vuex from 'vuex';

Vue.use(Vuex)

export function createStore() {
    return new Vuex.Store({
        state: {
            loogin: Vue.$cookies.get('escort_id'),
            itinerary_title: '',
        },
        getters: {
            isLoggedIn(state){
                return state.loogin
            },
            getTitle(state){
                return state.itinerary_title
            }
        },
        actions: {
            setTitle(context, title){
                context.commit('ADD_TITLE',title);
            },
        },
        
        mutations: {
            ADD_TITLE(state, payload){
                state.itinerary_title = payload;
            }
        }
    })
}