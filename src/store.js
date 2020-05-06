import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allMovies: [],
    selectedMovie: []
  },
  mutations: {
    addMovies(state, data) {
      state.allMovies = data
    }
  }
})
