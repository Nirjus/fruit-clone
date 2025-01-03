import Product from "../schema/product.schema.js";

export const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find({});

    return res.status(200).json({
      success: true,
      message: "Product are return successfully",
      products,
    });
  } catch (error) {
    next(error);
  }
};
