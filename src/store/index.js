import { createStore } from 'vuex'

export default createStore({
  state: {
    colors: {
      // Text
      black87: '#000000de', // black87
      grey7E: '#7E7E7E', // 12px border label
      white87: '#ffffffde', // white87
      // Border
      norm: '#D0CFCF', // inp border still
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
