import express, { urlencoded } from "express";
import path from "path";
import ProductController from "./src/controllers/product.controller.js";
import ejsLayouts from "express-ejs-layouts";

const server = express();
//set up view engine
server.set("view engine", "ejs");
server.set("views", path.join(path.resolve(), "src", "views"));
server.use(ejsLayouts);

server.use(urlencoded({ extended: true }));

const productController = new ProductController();

server.use((req, res, next) => {
  console.log("Request:", req.method, req.url);
  next();
});

server.get("/", productController.getProducts);
server.get("/new", productController.addProducts);
server.post("/", productController.addnewProducts);

const PORT = 8805;
server.listen(PORT, () => {
  console.log("Server running → http://localhost:" + PORT);
});
