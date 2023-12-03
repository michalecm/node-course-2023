import { Router } from "express";
import { ProductRepository } from "../../repositories/product.repository";
import { ProductService } from "../../services/product.service";
import { ProductController } from "../../controllers/product.controller";

const productRouter = Router();
const productRepository = new ProductRepository();
export const productService = new ProductService(productRepository);
const productController = new ProductController(productService)

productRouter.get("/:productId", productController.getProduct.bind(productController));
productRouter.get("/", productController.getProducts.bind(productController));

export default productRouter;