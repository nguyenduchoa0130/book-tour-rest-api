class AppError {
  static createBadRequestError(message) {
    const error = new Error(message);
    error.type = 'BAD_REQUEST';
    error.statusCode = 400;
    return error;
  }
  static createNotFoundError(message) {
    const error = new Error(message);
    error.type = 'NOT_FOUND';
    error.statusCode = 404;
    return error;
  }
}

module.exports = AppError;

