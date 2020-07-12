const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const config = require("./config/keys");

const { User } = require("./models/user");

mongoose
  .connect(config.MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.post("/api/users/register", (req, res) => {
  const user = new User(req.body);
  user.save((err, data) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
      data: req.body,
    });
  });
});

app.listen(5000, () => console.log("App is running on port 5000"));
