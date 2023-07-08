const app = require("./app");
const http = require("http");
const connectDatabase = require("./config/database");

connectDatabase()
const server = http.createServer(app);

server.listen(4000, () => {
  console.log("listening at port 4000");
});

