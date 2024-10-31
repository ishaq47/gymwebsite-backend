const multer = require('multer');
const path = require('path');

// Define disk storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const tempDir = path.resolve('/tmp');
    cb(null, tempDir);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const uploadOnMulter = multer({ storage });

module.exports = { uploadOnMulter };
