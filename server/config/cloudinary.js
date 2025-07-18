const cloudinary = require("cloudinary")
require("dotenv").config();
exports.cloudinaryConnect = async (req, res) => {
    try {
        cloudinary.config({
            cloud_name: process.env.CLOUD_NAME,
            api_key: process.env.API_KEY,
            api_secret: process.env.API_SECRET
        })
    } catch (error) {
        console.log("Error occure from cloudinary", error);
    }
}