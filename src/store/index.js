import { createStore } from 'vuex'
import formData from './modules/formData.js'
import serverData from './modules/serverData.js'

export default createStore({
  modules: {
    formData,
    serverData
  }
})
