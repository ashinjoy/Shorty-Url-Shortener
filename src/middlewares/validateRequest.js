import { validationResult } from "express-validator";

export const validateRequest = (req, res, next) => {
  const validate = validationResult(req);
  if (!validate.isEmpty()) {
    const errorDetails = validate.errors.map((err) => ({
      field: err?.path,
      message: err?.msg,
    }));
    const error = new Error("validation Error");
    error.statusCode = 400;
    error.details = errorDetails;
    throw error;
  }
  next();
};
