const logger = (req, res, next) => {
  const date = new Date();
  const formatedDate = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
  console.log([formatedDate], req.method, req.path);
  next();
};

export default logger;
