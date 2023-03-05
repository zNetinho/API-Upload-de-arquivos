const express = require("express");
const router = express.Router();

const upload = require("../config/multer.js")

const PictureController = require("../controllers/picturesControllers.js");

router.post("/", upload.single("file"), PictureController.create);
router.get("/", PictureController.findAll);
router.delete("/:id", PictureController.delete)


module.exports = router;