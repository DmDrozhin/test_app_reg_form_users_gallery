getFromServ({commit}, pld) {
  return axios.get({
    url: 'https://frontend-test-assignment-api.abz.agency/api/v1/users',
    params: {
      page: pld.goToPage,
      count: 6
    }
  })
  .then(resp => {
    commit('setServerResp', resp)
    if (resp.status === 200) {
      const dt = { res: resp.data, idn: pld.idn }
      commit('saveRespData', dt)
    }
  })
  .catch((err) => commit('saveErr', err))
}

