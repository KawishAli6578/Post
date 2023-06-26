const express = require("express");
const { randomBytes } = require("crypto");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(bodyParser.json());
app.use(cors());
const posts = {};

app.get("/posts", (req, res) => {
  res.send(posts);
});
app.post("/posts", (req, res) => {
  const id = randomBytes(4).toString("hex");
  console.log(req.body, "req.body");
  const { title } = req.body;
  posts[id] = [id, title];
  console.log(posts, "posts", "posts");
  res.status(201).send(posts[id]);
});
app.listen(4000, () => {
  console.log("listening at port 4000");
});
