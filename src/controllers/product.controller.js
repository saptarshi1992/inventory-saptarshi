import path from "path";
import { fileURLToPath } from "url";
import ProductModel from "../models/product.model.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default class ProductController {
  getProducts(req, res) {
    const filePath = path.join(__dirname, "..", "views", "products.ejs");
    // let products = ProductModel.get();
    let products = ProductModel.fetchProducts();
    console.log(products);
    res.render("products", { products: products });
    //console.log("Sending file:", filePath);
    //res.sendFile(filePath);
  }
  addProducts(req, res) {
    return res.render("new-product");
  }

  addnewProducts(req,res){
   console.log(req.body)
   res.render("products", { products: products });
  }
}
