import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    itemName: {
      type: String,
      required: [true, "Item name is required"],
    },
    price: {
      type: Number,
      required: [true, "Product Price is required"],
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("products", productSchema);

export default Product;
