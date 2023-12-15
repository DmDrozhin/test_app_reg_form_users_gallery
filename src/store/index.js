import { createStore } from 'vuex'
import formData from './modules/formData.js'
import serverData from './modules/serverData.js'
import regData from './modules/regData.js'

export default createStore({
  modules: {
    formData,
    serverData,
    regData
  }
})
