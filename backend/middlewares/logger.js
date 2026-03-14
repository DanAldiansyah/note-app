const logger = (req, res, next) => {
  console.log("\nAPI endpoint", req.path, "\nREQUEST method", req.method);
  next();
}

export default logger