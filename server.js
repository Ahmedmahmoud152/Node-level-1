/*console.log("Hello world!");

const os=require('os');

console.log(os.type());

console.log(os.version());
console.log(os.homedir());


console.log(__dirname);

console.log(__filename);  */
const mongoose = require("mongoose");

const Cat = mongoose.model("Cat", { name: "string" });
const kitty = new Cat({ name: "Zildjian" });
kitty.save().then(() => console.log("meow!"));
const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile("./Views/home.html", { root: __dirname });
});

app.listen(port, () => {
  console.log(`http://localhost:${3000}/`);
});

mongoose
  .connect("mongodb://127.0.0.1:27017/test")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));
