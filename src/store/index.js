import { createStore } from 'vuex'

export default createStore({
  state: {
    colors: {
      norm: '#000000de', // black87
      normWt: '#ffffffde', // white87
      normInp: '#D0CFCF', // inp border still
      err: '#CB3D40', // errors color
    },
  },
  getters: {
    COLORS: (state) => state.colors
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
