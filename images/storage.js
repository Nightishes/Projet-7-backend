const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name: "nightishes",
    api_key: "474892125618358",
    api_secret: "Gqa5A23aS79xXCh0rPDyTYUXiX0",
  });

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'CloudinaryDemo',
        allowedFormats: ['jpeg', 'png', 'jpg'],
    }
});



module.exports = {
    storage
};