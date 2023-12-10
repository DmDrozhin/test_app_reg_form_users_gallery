import axios from "axios"
export default {
  // namespaced: true,
  state () {    
    return {
      serverResp: '',
      users: {},
      jobs: {},
      nav: {
        url: 'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6',
        urlJobs: 'https://frontend-test-assignment-api.abz.agency/api/v1/positions'
      },
      loadStat: {
        isDnLoad: false,
        isUpLoad: false,
      },

      respCodes: {
        401: 'Request failed. Status 401',
        409: 'User already exist',
        422: 'Validation failed'
      },
    }
  },

  getters: {
    users: (state) => state.users.users,
    nextUrl: (state) => { if (state.users) { return state.users.links.next_url } },

    jobs: (state) => state.jobs.positions,
    respCode: (state) => state.serverResp.status,
    loadStat: (state) => state.loadStat,

    nav: (state) => state.nav
  },

  mutations: {
    setServerResp: (state, resp) => state.serverResp = resp,

    saveRespData: (state, dt) => {
      state[dt.idn] = dt.res
    },
    setLoadStat: (state, load) => { state.loadStat[load.mode] = load.state },
  },

  actions: {
    getUsers({commit}, pld) {
      commit('setLoadStat', {mode: 'isDnLoad', state: true})
      return axios.get(pld.url)
      .then(resp => {
        commit('setServerResp', resp)
        if (resp.status === 200) {
          const dt = { res: resp.data, idn: pld.idn }
          commit('saveRespData', dt)
          commit('setLoadStat', {mode: 'isDnLoad', state: false})
        }
      })
      .catch((err) => console.err('* Server resp Err *', err))
    },
    
  }
}