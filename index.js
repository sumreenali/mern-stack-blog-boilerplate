const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb://mern-blog-boilerplate-v1:mern-blog-boilerplate-v1@ds063869.mlab.com:63869/mern-blog-boilerplate-v1",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello world");
});
app.listen(5000, () => console.log("App is running on port 5000"));
