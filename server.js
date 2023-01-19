import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import seedRouter from "./routes/seedRoutes.js";
import CategoryRouter from "./routes/categoryRoutes.js";
import UserRouter from "./routes/userRoutes.js";
import ProductRouter from "./routes/productRoutes.js";
import OrderRouter from "./routes/orderRoutes.js";
import PostRouter from "./routes/postRoutes.js";
import twilio from "twilio";
import axios from "axios";

const app = express();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(
  "AC307ade278258d846a781744619ecade0",
  "040f4722ba4709bd9a2629022632e70e"
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Router

app.use("/api/seed/", seedRouter);
app.use("/api/category/", CategoryRouter);
app.use("/api/products/", ProductRouter);
app.use("/api/users/", UserRouter);
app.use("/api/orders/", OrderRouter);
app.use("/api/posts/", PostRouter);

// Sending SMS
/* 
app.use(`/api/sendSms`, (req, res) => {
  client.messages
    .create({
      to: '+8801826705615',
      from: '+19259405518',
      body: 'hello from ctg e market',
    })
    .then((message) => console.log(message.status));
  sendOtp();

  res.send("Sent SmS");
});

function sendOtp() {
  var num = "8801322250221";
  var msg = "Hello";
  axios
    .post("https://sowdaapp.com/sendotp.php", {
      num: num,
      msg: msg,
    })
    .then((res) => console.log(""))
    .catch((err) => console.log(err));
}
 */
// Connect with DB

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err.message);
  });

// Port created

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
