const express = require("express");
const router = express.Router();
const {User} = require("./user.model.js");
const mongoose = require("mongoose");
const multer = require('multer');

router.get("/", async (req, res)=>{
  const xs = await User.find({});
  res.send(xs);
});

router.get("/onlineCount", async (req, res)=>{
  res.send('' + Math.floor(Math.random() * 20));
});

router.post("/", async (req, res)=>{
  const user = new User(req.body);
  console.log("Saving user", req.body);
  try {
    await user.save();
    res.sendStatus(201);
  } catch (err) {
    console.log(err.message);
    res.sendStatus(400);
  }
});

router.post("/task9", async (req, res)=>{
  let user = await User.findOne({personalCode: req.body.personalCode});
  let status = 200;
  if (user) {
    console.log("Updating existing user");
    user.fullName = req.body.fullName;
    user.address = req.body.address;
    user.phoneNumber = req.body.phoneNumber;
  } else {
    console.log("Creating new user");
    user = new User(req.body);
    status = 201;
  }
  try {
    await user.save();
    res.sendStatus(status);
  } catch (err) {
    console.log(err.message);
    res.sendStatus(400);
  }
});

module.exports = router;