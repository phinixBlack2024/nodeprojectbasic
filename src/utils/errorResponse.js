class errorResponse extends Error {
  constructor(statusCode, message = "something went wrong", error = [], stack = "") {
    super(message),
      this.message = message 
      this.statusCode = statusCode
      Error.captureStackTrace(this, this.constructor)
    if (stack) {
      this.stack = stack
    } else {
      return Error.captureStackTrace(this, this.constructor)
    }
  }
}

module.exports = errorResponse