export const errorHandler = async (err, req, res, next) => {
  console.log('we',err);
  
  const statusCode = err?.statusCode ? err?.statusCode : 500;
  const error = {
    message: err?.message || "Internal Server Error",
    details: err?.details || []
  }
  console.log("err in ja",error);
  
  res.status(statusCode).json(error);
};
