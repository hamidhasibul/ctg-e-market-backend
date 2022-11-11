import express from 'express';
import Category from '../models/categoryModel.js';

const CategoryRouter = express.Router();

//Fetiching Category From DB

CategoryRouter.get('/', async (req, res) => {
  const category = await Category.find();
  res.send(category);
});

export default CategoryRouter;
