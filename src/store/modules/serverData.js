import axios from "axios"

const serverData = {
  namespaced: true,
  state () {    
    return {
      serverResp: '',
      users: {
        links: { next_url: null }
      },
      jobs: {},
      // jobs: { success: true, positions: [{"id":1,"name":"Lawyer"},{"id":2,"name":"Content manager"},{"id":3,"name":"Security"},{"id":4,"name":"Designer"}] },
      nav: {
        urlUsers: 'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6',
        urlJobs: 'https://frontend-test-assignment-api.abz.agency/api/v1/positions'
      },

      loadStat: {},

      respCodes: {
        401: 'Request failed. Status 401',
        409: 'User already exist',
        422: 'Validation failed'
      },
    }
  },

  getters: {
    users: (state) => state.users.users,
    respCode: (state) => state.serverResp.status,
    loadStat: (state) => state.loadStat,
    nav: (state) => state.nav,
    nextUrl: (state) => state.users.links.next_url
  },

  mutations: {
    setServerResp: (state, resp) => state.serverResp = resp,

    saveRespData: (state, dt) => {
      state[dt.idn] = dt.res
    },
    setLoadStat: (state, load) => { state.loadStat = { idn: load.idn, isON: load.isON } },
  },

  actions: {
    getFromServ({commit}, pld) {
      // console.log('Payload received', pld)

      commit('setLoadStat', { idn: pld.idn, isON: true })
      return axios.get(pld.url)
      .then(resp => {
        commit('setServerResp', resp)
        if (resp.status === 200) {
          const dt = { res: resp.data, idn: pld.idn }
          commit('saveRespData', dt)
          commit('setLoadStat', { idn: pld.idn, isON: false })
        }
      })
      .catch((err) => console.err('* Server resp Err *', err))
    },
    
  }
}

export default serverData