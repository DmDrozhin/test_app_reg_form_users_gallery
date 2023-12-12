const mockData = {
  namespaced: true,
  state () {    
    return {
      users: { 
        success: true,
        total_pages: 8,
        total_users: 47,
        count: 6,
        page: 3,
        links: { 
          next_url: "https://frontend-test-assignment-api.abz.agency/api/v1/users?page=4&count=6",
          prev_url: "https://frontend-test-assignment-api.abz.agency/api/v1/users?page=2&count=6" 
        },
        users: [
          { 
            id: 11,
            name: "Adolph Blaine Charles David Earl Frederick",
            email: "adolph.blaine.charles.david.earl.frederick@gmail.com",
            phone: "+380951644437",
            position: "Content manager",
            position_id: 2,
            registration_timestamp: 1604494937,
            photo: "https://frontend-test-assignment-api.abz.agency/images/users/5fa2a659790c511.jpeg"
          },
          {
            id: 12,
            name: "Olaf Gutkowski",
            email: "gabriella41@gmail.com",
            phone: "+380938368097",
            position: "Content manager",
            position_id: 2,
            registration_timestamp: 1604494937,
            photo: "https://frontend-test-assignment-api.abz.agency/images/users/5fa2a6597a29012.jpeg"
          },
          {
            id: 13, 
            name: "Vicky Kovacek",
            email: "keegan98@cormier.biz",
            phone: "+380995231803", 
            position: "Content manager", 
            position_id: 2,
            registration_timestamp: 1604494937,
            photo: "https://frontend-test-assignment-api.abz.agency/images/users/5fa2a6597b1bc13.jpeg"
          },
          {
            id: 14,
            name: "Wolfeschlegelsteinhausenbergerdorffvoraltern",
            email: "wolfeschlegelsteinhausenbergerdorffvoraltern@gmail.com",
            phone: "+380678586859",
            position: "Designer",
            position_id: 4,
            registration_timestamp: 1604494937,
            photo: "https://frontend-test-assignment-api.abz.agency/images/users/5fa2a6597c0ac14.jpeg"
          },
          {
            id: 15,
            name: "Linnea Ryan",
            email: "liana.sauer@little.net",
            phone: "+380678976897",
            position: "Lawyer",
            position_id: 1,
            registration_timestamp: 1604494937,
            photo: "https://frontend-test-assignment-api.abz.agency/images/placeholders/placeholder.png"
          },
          {
            id: 16,
            name: "Melvina Jerde",
            email: "wilderman.jennings@hotmail.com",
            phone: "+380937472660",
            position: "Designer",
            position_id: 4,
            registration_timestamp: 1604494937,
            photo: "https://frontend-test-assignment-api.abz.agency/images/users/5fa2a6597d98216.jpeg"
          }
        ]
      },

      jobs: { success: true, positions: [{"id":1,"name":"Lawyer"},{"id":2,"name":"Content manager"},{"id":3,"name":"Security"},{"id":4,"name":"Designer"}] },
    
      token: {
        "success": true,
        "token": 'eyJpdiI6Im9mV1NTMlFZQTlJeWlLQ3liVks1MGc9PSIsInZhbHVlIjoiRTJBbUR4dHp1dWJ3ekQ4bG85WVZya3ZpRGlMQ0g5ZHk4M05UNUY4Rmd3eFM3czc2UDRBR0E4SDR5WXlVTG5DUDdSRTJTMU1KQ2lUQmVZYXZZOHJJUVE9PSIsIm1hYyI6ImE5YmNiODljZjMzMTdmMDc4NjEwN2RjZTVkNzBmMWI0ZDQyN2YzODI5YjQxMzE4MWY0MmY0ZTQ1OGY4NTkyNWQifQ=='
      },

      newUser: {},
      nav: {
        urlUsers: 'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6',
        urlJobs: 'https://frontend-test-assignment-api.abz.agency/api/v1/positions',
        urlToken: 'https://frontend-test-assignment-api.abz.agency/api/v1/token'
      }
    }
  },

  getters: {
    users: (state) => state.users.users,
    forUserReg: (state) => { if (state.token.success) return state.token.token },
    next_url: (state) => state.users.links.next_url
  }
}

export default mockData
