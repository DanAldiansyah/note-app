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
    datas: data,
    errors: error,
  });
};

export default response;
