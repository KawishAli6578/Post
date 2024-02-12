const express = require("express");
const { getAllPost, createNewPost } = require("../controller/postController");

const router = express.Router();

router.route("/posts/get").get(getAllPost);
router.route("/posts/create").post(createNewPost);

module.exports = router;