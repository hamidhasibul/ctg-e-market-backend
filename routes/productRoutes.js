import express from 'express';
import Product from '../models/productModel.js';

const ProductRouter = express.Router();

//Fetiching Product From DB

ProductRouter.get('/', async (req, res) => {
  const product = await Product.find();
  res.send(product);
});

//get product by slug
ProductRouter.get('/slug/:slug', async (req, res) => {
  const product = await Product.findOne({ slug: req.params.slug });
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});
export default ProductRouter;
