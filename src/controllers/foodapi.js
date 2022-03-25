const express = require("express");
const router = express.Router();
const Add = require("../schema/addingdata");
const Orderdata = require("../schema/order");

router.get("/", async (req, res) => {
  try {
    const data = await Add.find().lean().exec();
    res.send(data);
  } catch (e) {
    console.log(e);
  }
});

router.post("/", async (req, res) => {
  try {
    const data = await Add.create(req.body);
    res.send(data);
  } catch (e) {
    console.log(e);
  }
});

router.post("/cart", async (req, res) => {
  try {
    const order = await Orderdata.findOne(req.body)
      .populate("orders_id")
      .lean()
      .exec();
    res.send(order);
  } catch (e) {}
});

router.get("/cart", async (req, res) => {
  try {
    const order = await Orderdata.find().populate("orders_id").lean().exec();
    res.send(order);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
