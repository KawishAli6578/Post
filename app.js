const express = require("express");
const Cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
app.use(bodyParser.json());
app.use(cors());

const  postRoutes  = require("./routes/postRoutes");

app.use("/api", postRoutes );

module.exports = app;
