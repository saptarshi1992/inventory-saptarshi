import express from "express";
import path from "path";
import ProductController from "./src/controllers/product.controller.js";

const server = express();
//set up view engine
server.set("view engine", "ejs");
server.set("views", path.join(path.resolve(), "src", "views"));

const productController = new ProductController();

server.use((req, res, next) => {
  console.log("Request:", req.method, req.url);
  next();
});

server.get("/", productController.getProducts);

server.listen(8800, () => {
  console.log("Server running → http://localhost:8800");
});
