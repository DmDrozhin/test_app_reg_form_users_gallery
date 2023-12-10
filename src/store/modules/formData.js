const formData = {
  namespaced: true,
  state: {
    inpsData: {
      user: {
        sets: { type: 'text', tabindex: 1, disabled: false, autofocus: true, required: true, },
        name: 'user',
        holder: 'Name',
        inpValue: '',
        regex: /^(?=.*[A-Za-z0-9]).{3,60}$/,
        err: 0,
        errList: [
          'User is required field',
          'Please enter less then 60 and more then 3 characters',
          'User with this name already exits'
        ]
      },
      email: {
        sets: { type: 'email', tabindex: 2, disabled: false, autofocus: false, required: true, },
        name: 'email',
        holder: 'Email',
        inpValue: '',
        regex: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
        err: 0,
        errList: [
          'Field is required',
          'Please enter correct email',
          'User with this email already exits'
        ]
      },
      phone: { 
        sets: { type: 'tel', tabindex: 3, disabled: false, autofocus: false, required: true, },
        name: 'phone',
        holder: 'Phone',
        inpValue: '',
        regex: /^[\+]{0,1}380([0-9]{9})$/,
        err: 0,
        errList: [ 
          'Field is required',
          'Please enter num in format +380 XX XXX XX XX',
          'User with this phone or email already exist'
        ]
      },
      radio: {
        sets: { type: 'radio', tabindex: 4, disabled: false, autofocus: false, required: true, },
        name: 'radio',
        inpValue: '',
        labels: [],
        err: 0,
        errList: [ 
          'Job position is not selected'
        ]
      },
      fileInp: { 
        sets: { type: 'file', tabindex: 4, disabled: false, autofocus: false, required: true, },
        name: 'fileInp',
        holder: 'Upload',
        inpName: 'post-form-upload',
        accept: 'image/jpeg, image/jpg',
        inpValue: '',
        fileName: 'Upload your photo',
        limits: { max: 524880, type: 'image/jpeg', minW: 70, minH: 70 },
        err: 0,
        errList: [
          'Not uploaded',
          'Please upload: jpg/img, max. 5 Mb, min. 70 x 70 px'
        ], 
      },
    }
  },

  getters: {
    jobList: (state, getters, rootState, rootGetters) => {
      return rootState['serverData'].jobs
    },
    user: (state) => state.inpsData.user,
    email: (state) => state.inpsData.email,
    phone: (state) => state.inpsData.phone,
    file: (state) => state.inpsData.fileInp,

    radio: (state, getters) => {
      const inp = state.inpsData.radio
      const stat = getters.jobList.success === undefined
      if (stat) inp.labels = undefined
      else {
        inp.labels = getters.jobList.positions.map(it => {
          return { label: it.name, isChecked: false, disabled: false }
        })
      }
      return inp
    },

    getVals: (state) => {
      let vals = []
      for(let inpDt in state.inpsData) {
        state.inpsData[inpDt].inpValue === '' ? vals.push(false) : vals.push(true)
      }
      return vals
    },
    getErrs: (state) => {
      const sFd = state.inpsData
      let errs = []
      for(let inpDt in sFd) {
        sFd[inpDt].err === 0 ? errs.push(true) : errs.push(false)
      }
      return errs
    },
    someValsEmpty: (state, getters) => {
      return getters.getVals.includes(false)
    },
    isErrors: (state, getters) => {
      return getters.getErrs.includes(false)
    },
    formIsValid: (state, getters) => {
      return !getters.someValsEmpty && !getters.isErrors ? true : false
    }
  },

  mutations: {
    setInpData: (state, newData) => {
      let inpData = state.inpsData[newData.name]
      inpData.err = newData.err
      inpData.inpValue = newData.inpValue
      if (newData.fileName) { inpData.fileName = newData.fileName }
    },
  },
  
  actions: {
    setInpData({ commit }, data) {
      commit('setInpData', data)
    }
  }
}
export default formData