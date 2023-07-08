const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  _id: { type: String },
  title: [{ type: String }],
});

module.exports = mongoose.model("post", postSchema);
