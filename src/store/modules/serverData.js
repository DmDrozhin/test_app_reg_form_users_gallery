import axios from "axios"

const serverData = {
  namespaced: true,
  state () {    
    return {
      serverResp: '',
      error: '',
      users: {},
      count: 6,
      jobs: { 
        success: true, 
        positions: [{"id":1,"name":"Lawyer"},{"id":2,"name":"Content manager"},{"id":3,"name":"Security"},{"id":4,"name":"Designer"}] 
      },
      urls: {
        urlStart: 'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6',
        urlJobs: 'https://frontend-test-assignment-api.abz.agency/api/v1/positions',
        urlUsers: 'https://frontend-test-assignment-api.abz.agency/api/v1/users',
      },
      isLoading: false
    }
  },

  getters: {
    nextUrl: (state) => {
      const tUsers = state.users.total_users
      const totalPages = Math.ceil(tUsers / state.count)
      const nextPage = +state.users.page + 1
      return nextPage <= totalPages ? `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${nextPage}&count=${state.count}` : null
    },
    users: (state) => state.users.users,
    respCode: (state) => state.serverResp.status,
    loadStat: (state) => state.loadStat,
    urls: (state) => state.urls,
    isLoading: (state) => state.isLoading
    
    // nextUrl: (state, rootState, rootGetters) => {
    //   if (!state.users.success) {
    //     return rootGetters['mockData'].next_url
    //   } else return state.users.links.next_url
    // }
  },

  mutations: {
    setServerResp: (state, resp) => state.serverResp = resp,
    saveRespData: (state, dt) => state[dt.idn] = dt.res,
    saveErr: (state, err) => state.error = err,
    setLoader: (state, val) => state.isLoading = val
  },

  actions: {
    getFromServ({commit}, pld) {
      // console.log('GET Payload received', pld)
      commit('setLoader', true)
      return axios.get(pld.url)
      .then(resp => {
        commit('setServerResp', resp)
        if (resp.status === 200) {
          const dt = { res: resp.data, idn: pld.idn }
          commit('saveRespData', dt)
        }
      })
      .then(() => commit('setLoader', false))
      .catch((err) => commit('saveErr', err))
    }
  }
}
export default serverData