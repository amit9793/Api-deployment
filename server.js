const express = require("express");
const mongoose = require("mongoose");
const port = process.env.PORT || 2345;
const data = require("./db.json");

const connect = () => {
  return mongoose.connect("mongodb://127.0.0.1:27017/Crickbuzz");
};

const userSchema = new mongoose.Schema({
  author: { type: String },
  title: { type: String },
  description: { type: String },
  url: { type: String },
  urlToImage: { type: String },
  publishedAt: { type: String },
  content: { type: String },
});

const User = mongoose.model("news", userSchema);

const app = express();
app.use(express.json());

app.get("/user", async (req, res) => {
  const user = await User.find();
  return res.status(201).send(user);
});

app.post("/user", async (req, res) => {
  const user = await User.create(data);
  return res.status(201).send(user);
});

app.listen(port, async function () {
  await connect();
  console.log("hello port 2345");
});
