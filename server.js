import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedRouter from './routes/seedRoutes.js';
import CategoryRouter from './routes/categoryRoutes.js';
import UserRouter from './routes/userRoutes.js';
import ProductRouter from './routes/productRoutes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Router

app.use('/api/seed/', seedRouter);
app.use('/api/category/', CategoryRouter);
app.use('/api/products/', ProductRouter);
app.use('/api/users/', UserRouter);

// Connect with DB

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to DB');
  })
  .catch((err) => {
    console.log(err.message);
  });

// Port created

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
