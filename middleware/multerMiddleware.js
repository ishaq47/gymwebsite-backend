const multer = require('multer');
const path = require('path');

// Define disk storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },

  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  }

});

const uploadOnMulter = multer({ storage: storage }).single('photo');

module.exports = { uploadOnMulter };
