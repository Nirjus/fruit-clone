import express from "express";
import productRouter from "./routes/products.route.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/test", (req, res) => {
  res.send("Hello Backend is running 👌");
});

app.use("/product", productRouter);

app.use((error, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
export default app;
