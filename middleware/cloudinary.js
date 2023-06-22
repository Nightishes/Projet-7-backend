const handleUpload = require('../helper')
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const myUploadMiddleware = upload.single("image");


function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

const handler = async (req, res, next) => {
  try {
    await runMiddleware(req, res, myUploadMiddleware);
    const b64 = Buffer.from(req.file.buffer).toString("base64");
    let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
    const imageUrl = await handleUpload(dataURI);
    console.log(imageUrl.url)
    req.file = imageUrl.url
  } catch (error) {
    console.log(error);
    res.send({
      message: error.message,
    });
  }
  next()
};


 const config = {
  api: {
    bodyParser: false,
  },
};

module.exports= handler, config;