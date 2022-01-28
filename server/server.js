const express = require("express");
const multer = require("multer");
const cors = require("cors");

// creating application using express
const app = express();

// creating cors middleware  to use more than one host
app.use(cors());
app.use(express.static("public"));

// storage & destination will be saved in public folder.
const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "public");
  },
  //   filename will be created by timestamp of current time & originalFileName
  filaname: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});
// multer is used to upload and will be saved in storage and saved as 1 file.
const upload = multer({ storage }).array("file");

app.post("/upload", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).send(req.files);
  });
});

app.listen(8000, () => {
  console.log("App is running on port 8000.");
});
