import { Router } from "express";
import { getAllProducts } from "../controller/product.controller.js";

const productRouter = Router();

productRouter.get("/getAll-products", getAllProducts);

export default productRouter;
