//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const cors = require ('cors');
const path = require('path');
const PORT = 3000;

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../myapp/build')));

mongoose.connect("mongodb://localhost:27017/studentDB", {useNewUrlParser: true});

const userSchema = {
  firstname: String,
  middlename: String,
  surname: String,
  registration: String,
  course: String
};

const User = mongoose.model("User", userSchema);

app.get('/user', (req, res)=>{
  User.find((err, users)=>{
    if (!err) {
      res.send(users);
    } else {
      res.send(err);
    }
  });
});

app.post("/user", (req, res)=>{
    const newUser = new User({
    firstname: req.body.first,
    middlename: req.body.middle,
    surname: req.body.sname,
    registration: req.body.regno,
    course: req.body.course
  });

  newUser.save(function(err){
    if (!err){
      res.send("Successfully added a new user.");
    } else {
      res.send(err);
    }
});
});

app.listen(PORT, ()=>console.log("Server running at port 3000"));


