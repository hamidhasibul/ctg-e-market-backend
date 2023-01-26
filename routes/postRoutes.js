import express from "express";
import Post from "../models/postModel.js";

const PostRouter = express.Router();

//Fetching Post From DB

PostRouter.get("/", async (req, res) => {
  const post = await Post.find();
  res.send(post);
});

//create post
PostRouter.post("/add", async (req, res) => {
  const newPost = new Post(req.body);

  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (error) {
    console.log("Error!");
  }
});

// Deleting Post

PostRouter.delete("/delete/:id", async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.status(200).json("Post has been deleted!");
  } catch (error) {
    console.log("Can't be deleted!");
  }
});

export default PostRouter;

//get product by slug
/* ProductRouter.get("/slug/:slug", async (req, res) => {
  const product = await Product.findOne({ slug: req.params.slug });
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product Not Found" });
  }
});
 */
//get product by sellerId
/* ProductRouter.get("/seller/:id", async (req, res) => {
  const product = await Product.find({ sellerId: req.params.id });
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "No Product of the this Seller" });
  }
}); */

//for update product
/* ProductRouter.put("/update", async (req, res) => {
  const product = await Product.findById(req.body._id);
  //if product exists
  if (product) {
    product.name = req.body.name || product.name;
    product.slug = req.body.slug || product.slug;
    product.category = req.body.category || product.category;
    product.description = req.body.description || product.description;
    product.price = req.body.price || product.price;
    product.image = req.body.image || product.image;
    product.sellerId = req.body.sellerId || product.sellerId;
    product.seller = req.body.seller || product.seller;
    product.sellerImage = req.body.sellerImage || product.sellerImage;

    const updateProduct = await product.save();
    res.send({
      _id: updateProduct._id,
      name: updateProduct.name,
      slug: updateProduct.slug,
      category: updateProduct.category,
      description: updateProduct.description,
      price: updateProduct.price,
      image: updateProduct.image,
      sellerId: updateProduct.sellerId,
      seller: updateProduct.seller,
      sellerImage: updateProduct.sellerImage,
    });
  } else {
    res.status(401).send({ message: "Product not Found!" });
  }
}); */
