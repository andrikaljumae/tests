const express = require("express");
const router = express.Router();
const {Order} = require("./order.model.js");
const mongoose = require("mongoose");

router.post("/", async (req, res)=>{
  const order = new Order(req.body);
  console.log("Saving order", req.body);
  try {
    await order.save();
    res.sendStatus(201);
  } catch (err) {
    console.log(err.message);
    res.sendStatus(400);
  }
});

router.get("/", async (req, res)=>{
  const search = {};
  if (req.query.fullName) {
    search.fullName = req.query.fullName;
  }
  if (req.query.burger) {
    search.burger = req.query.burger;
  }
  if (req.query.drink) {
    search.drink = req.query.drink;
  }
  const xs = await Order.find(search);
  res.send(xs);
});

module.exports = router;