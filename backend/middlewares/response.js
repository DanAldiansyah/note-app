const response = (
  res,
  statusCode,
  success,
  message,
  data = null,
  error = null,
) => {
  res.status(statusCode).json({
    success: success,
    message: message,
    data: data,
    error: error,
  });
};

export default response;
