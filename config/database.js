const mongoose = require("mongoose");
const url = "mongodb+srv://fayyaz6578:carcar11@cluster0.ahmfmuj.mongodb.net/";
const connectDatabase = async () => {
  let db = false
  await mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`Mongodb is connect to ${data.connection.host}`);
      db = true;
      return db;

    }).catch((err) => {
      db = false;
      return db;
    });

};
module.exports = connectDatabase;
