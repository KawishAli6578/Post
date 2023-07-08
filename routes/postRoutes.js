const express = require("express");
const { getAllPost, createNewPost } = require("../controller/postController");

const router = express.Router();

router.route("/posts").get(getAllPost);
router.route("/posts").post(createNewPost);

module.exports = router;