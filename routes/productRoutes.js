import express from 'express';
import Product from '../models/productModel.js';

const ProductRouter = express.Router();

//Fetiching Product From DB

ProductRouter.get('/', async (req, res) => {
  const product = await Product.find();
  res.send(product);
});

export default ProductRouter;
