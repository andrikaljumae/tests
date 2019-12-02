const express = require("express");
const router = express.Router();
const {Order} = require("./order.model.js");
const mongoose = require("mongoose");

router.get("/", async (req, res)=>{
  const xs = await Order.find({});
  res.send(xs);
});

module.exports = router;

