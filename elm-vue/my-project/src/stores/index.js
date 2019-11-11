import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        author: 'lu',
        search: {
            value: ''
        },
        //遮罩
        gallery: {
            status: false,
            img: "",
            name: "",
            price: ""
        },
        user: {
            status: false,
            data: []
        }
       
        
    },
    getters: {
        getAuthor(state) {
            return state.search
        },
        getGallery(state) {
            return state.gallery
        },
        getUser(state) {
            return state.user
        }
       
    },
    mutations: {
        setAuthor(state, data) {
            state.search = data
        },
        setGallery(state, newValue) {
            state.gallery = newValue
        },
        setUser(state, data) {
            state.user = data
        }
      

    },
    actions: {
        setAuthor(context, data) {
            context.commit('setAuthor', data)
        },
        setGallery(context, newValue) {
            context.commit('setGallery', newValue)
        },
        setUser(context, data) {
            context.commit('setUser', data)
        }
    }
})