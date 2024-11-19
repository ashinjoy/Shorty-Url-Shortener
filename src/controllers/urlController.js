import { urlModel } from "../models/urlModel.js";
import { generateShortId } from "../utils/randomId.js";

export const shortenUrl = async (req, res, next) => {
  try {
    const userId = req.userID
    const { url } = req.body;
    const shortId = await generateShortId(6);
    console.log(shortId , typeof shortId);
    console.log(userId);
    
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

export const redirectToOriginalURL = async(req,res,next)=>{
    try {
        const {shortUrl} = req.params
       const urlData = await urlModel.findOne({shortUrl})
       const ogUrl = urlData?.originalUrl
       res.redirect(ogUrl)
    } catch (error) {
        console.error(error);
        next(error)
    }
}
