import axios from "axios"

const regData = {
  namespaced: true,
  state: {
    urls: {
      urlToken: 'https://frontend-test-assignment-api.abz.agency/api/v1/token',
      urlReg: 'https://frontend-test-assignment-api.abz.agency/api/v1/users'
    },
    response: {
      user: { response: { status: '' }, },
      token: {data: { token: '' }, status: '' }
    },
    errors: {
      user: { response: { status: '' } },
      token: { status: '' }
    },
    isLoading: false
  },

  getters: {
    token: (state) => state.response.token.data.token,

    codeTkn: (state) => state.response.token.status === 200,
    errTkn: (state) => state.response.errors.token.status,

    codeUser: (state) => state.response.user.status === 200,
    errUser: (state) => state.response.errors.user.status,

    isLoading: (state) => state.isLoading
  },

  mutations: {
    saveResp: (state, dt) => state.response[dt.idn] = dt.res,
    saveErr: (state, err) => state.errors[err.idn] = err.res,
    clear: (state) => {
      state.response = {}
      state.errors = {}
    },
    setLoader: (state, val) => state.isLoading = val
  },

  actions: {
    getToken({ commit, state }) {
      // commit('clear')
      commit('setLoader', true)
      return axios.get(state.urls.urlToken)
      .then(resp => {
        if (resp.status === 200) {
          // console.log(resp)
          const dt = { res: resp, idn: 'token' }
          commit('saveResp', dt)
        }
      })
      .then(() => commit('setLoader', false))
      .catch((err) => {
        const dt = { res: err, idn: 'token'}
        commit('saveErr', dt)
        console.log('Err receiving *Token', err)
      })
      

    },
    
    postNewUser({ commit, state, getters, rootState, rootGetters }) {
      const upData = rootGetters['formData/forUserReg']
      const url = state.urls.urlReg
      const token = getters.token
      commit('setLoader', true)
      return axios({
        url: url,
        method: 'POST',
        data: upData,
        headers: { 'Content-Type': 'multipart/form-data', Token: token }
      })
      .then(resp => {
        if (resp.status = 200) {
          const dt = { res: resp, idn: 'user' }
          commit('saveResp', dt)
          return true
        }
      })
      .then(() => commit('setLoader', false))
      .catch((err) => {
        const dt = { res: err, idn: 'user'}
        commit('saveErr', dt)
        const code = err.response.status
        commit('formData/setRespErr', code, { root: true })
        console.log('Err receiving *nUser', err)
      })
    },
  }
}
export default regData

