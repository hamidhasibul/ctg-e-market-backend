import express from "express";
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";

const UserRouter = express.Router();

// User Login

UserRouter.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (user) {
    if (bcrypt.compareSync(req.body.password, user.password)) {
      res.send({
        _id: user._id,
        name: user.name,
        email: user.email,
        address: user.address,
        phone: user.phone,
        image: user.image,
        isAdmin: user.isAdmin,
      });
      return;
    }
  }
  res.status(401).send({ message: "Invalid Email or Password" });
});

// Registering New Users

UserRouter.post("/register", async (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password),
    address: req.body.address,
    phone: req.body.phone,
    image:
      req.body.image ||
      "https://res.cloudinary.com/dpxmimqsi/image/upload/v1668371065/pngwing.com_jp7nkt.png", //for default image
  });
  const user = await newUser.save();
  res.send({
    _id: user._id,
    name: user.name,
    email: user.email,
    address: user.address,
    phone: user.phone,
    image: user.image,
    isAdmin: user.isAdmin,
  });
});

// Updating user data

UserRouter.put("/update", async (req, res) => {
  const user = await User.findById(req.body._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.address = req.body.address || user.address;
    user.phone = req.body.phone || user.phone;
    user.image = req.body.image || user.image;
    if (req.body.password) {
      user.password = bcrypt.hashSync(req.body.password);
    }

    const updateUser = await user.save();
    res.send({
      _id: updateUser._id,
      name: updateUser.name,
      email: updateUser.email,
      address: updateUser.address,
      phone: updateUser.phone,
      image: updateUser.image,
      isAdmin: updateUser.isAdmin,
    });
  } else {
    res.status(401).send({ message: "User not Found!" });
  }
});

// For All Users

UserRouter.get("/all", async (req, res) => {
  const users = await User.find();
  res.send(users);
});

// For individual Users

UserRouter.get("/user/:id", async (req, res) => {
  const user = await User.findOne({ _id: req.params.id });
  if (user) {
    res.send(user);
  } else {
    res.status(404).send({ message: "User Not Found" });
  }
});

// User Delete

UserRouter.delete("/delete/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted!");
  } catch (error) {
    console.log("Can't be deleted!");
  }
});

export default UserRouter;
