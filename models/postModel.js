import mongoose from "mongoose";

const PostsSchema = new mongoose.Schema(
  {
    post: { type: String, required: true },
    image: { type: String },
    posterId: { type: String, required: true },
    poster: { type: String, required: true },
    posterImage: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Posts = mongoose.model("Post", PostsSchema);

export default Posts;
