import { urlModel } from "../models/urlModel.js";
import { generateShortId } from "../utils/randomId.js";

export const shortenUrl = async (req, res, next) => {
  try {
    const { userId, url } = req.body;
    const shortId = generateShortId(6);
    const createUrl = await urlModel.create({
      userId,
      shortUrl: shortId,
      originalUrl: url,
    });
    res
      .status(201)
      .json({
        success: true,
        message: "url shortend",
        shortUrl: createUrl?.shortUrl,
      });
  } catch (error) {
    console.error(error);
    next(error); 
  }
};
