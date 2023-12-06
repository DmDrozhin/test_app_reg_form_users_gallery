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

    formData: {
      user: { 
        inpName: 'post-from-name', 
        inpType: 'text', 
        inpPlaceholder: 'name', 
        isValid: true, 
        errMessage: 'some error msg', 
        isDisabled: false,
        inpValue: '',
      },
      email: { 
        inpName: 'post-from-email', 
        inpType: 'email', 
        inpPlaceholder: 'email',
        isValid: true, 
        errMessage: 'some error msg',
        isDisabled: false,
        inpValue: '' 
      },
      phone: { 
        inpName: 'post-from-phone', 
        inpType: 'tel', 
        inpPlaceholder: 'phone', 
        isValid: true, 
        errMessage: 'some error msg', 
        isDisabled: false,
        inpValue: ''
      },
      radio: { 
        inpName: 'post-from-radio',
        inpType: 'radio', 
        labels: [
          { label: 'Frontend developer', isChecked: false, disabled: false },
          { label: 'Backend developer', isChecked: false, disabled: false },
          { label: 'Designer', isChecked: false, disabled: false },
          { label: 'QA', isChecked: false, disabled: false },
        ],
        isValid: true, 
        errMessage: 'some error msg', 
        value: 'value' 
      },
      button: { 
        inpName: 'post-from-button', 
        inpType: 'button', 
        inpPlaceholder: 'upload', 
        isValid: true, 
        errMessage: 'some error msg', 
        isDisabled: false,
        inpValue: '',
      },
      uploadURL: { 
        inpName: 'post-from-upload-url',
        inpType: 'textarea', 
        inpPlaceholder: 'Upload your photo', 
        isValid: true, 
        errMessage: '', 
        isDisabled: false,
        inpValue: '',
      }
    }
  },
  getters: {
    COLORS: (state) => state.colors,
    formData: (state) => state.formData
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
