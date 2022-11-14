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

//get product by sellerId
ProductRouter.get('/seller/:id', async (req, res) => {
  const product = await Product.find({ sellerId: req.params.id });
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'No Product of the this Seller' });
  }
});

//create product
ProductRouter.post('/add', async (req, res) => {
  const newProduct = new Product(req.body);

  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (error) {
    console.log('Error!');
  }
});

export default ProductRouter;
