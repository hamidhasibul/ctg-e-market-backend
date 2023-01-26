import express from "express";
import Order from "../models/orderModel.js";

const OrderRouter = express.Router();

// Get all Orders

OrderRouter.get("/", async (req, res) => {
  const order = await Order.find();
  res.send(order);
});

//Create Order
OrderRouter.post("/", async (req, res) => {
  const newOrder = new Order({
    orderItems: req.body.orderItems.map((x) => ({ ...x, product: x._id })),
    id: req.body.id,
    name: req.body.name,
    email: req.body.email,
    address: req.body.address,
    phone: req.body.phone,
    sellerId: req.body.sellerId,
    itemsPrice: req.body.itemsPrice,
    taxPrice: req.body.taxPrice,
    totalPrice: req.body.totalPrice,
  });
  const order = await newOrder.save();
  res.status(201).send({ message: "New Order Created", order });
});

//Get my orders
OrderRouter.get("/mine/:id", async (req, res) => {
  const orders = await Order.find({ id: req.params.id });
  res.send(orders);
});

//Get my One Order
OrderRouter.get("/:id", async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (order) {
    res.send(order);
  } else {
    res.status(404).send({ message: "Order Not Found" });
  }
});

//Get individual Order
OrderRouter.get("/ind/:id", async (req, res) => {
  const order = await Order.findById(req.params._id);
  if (order) {
    res.send(order);
  } else {
    res.status(404).send({ message: "Order Not Found" });
  }
});

//Get my orders
//Get my orders
OrderRouter.get("/userorders/:id", async (req, res) => {
  const orders = await Order.find({ sellerId: req.params.id });
  res.send(orders);
});

export default OrderRouter;
