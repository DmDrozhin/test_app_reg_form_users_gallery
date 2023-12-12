const errData = {
  namespaced: true,
  state: {

    200: {
      success: true,
      user_id: 23,
      message: "New user successfully registered",
    },

    401: {
      success: false,
      message: "The token expired",
    },

    409: {
      success: false,
      message: "User with this phone or email already exist",
    },

    422: {
      success: false,
      message: "Validation failed",
      fails: {
        name: ["The name must be at least 2 characters."],
        email: ["The email must be a valid email address."],
        phone: ["The phone field is required."],
        position_id: ["The position id must be an integer."],
        photo: [
          "The photo may not be greater than 5 Mbytes",
          "mage is invalid",
        ],
      },
    },
  },
  getters: {
    
  }
}
export default errData
