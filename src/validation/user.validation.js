const errorResponse = require('../utils/errorResponse.js')
const userValidation = async (...dataToValidate) => {
  try {
    return {Email:'Email Required',Name:'Name Required'}

  } catch (error) {

  }
}

module.exports = { userValidation };