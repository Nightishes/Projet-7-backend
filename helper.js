const cloudinary = require("cloudinary").v2;
cloudinary.config({
    cloud_name: "dmfy17bhg",
    api_key: "474892125618358",
    api_secret: "Gqa5A23aS79xXCh0rPDyTYUXiX0",
});

async function handleUpload(file) {
  const res = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
    width: 206, crop: "fill",
    height: 260, crop:"fill",
    gravity: "middle"
  });
  return res;
}

module.exports= handleUpload;