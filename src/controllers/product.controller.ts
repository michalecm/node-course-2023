import { Request, Response } from 'express'
import { ProductService } from '../services/product.service';

export class ProductController {
    constructor(private productService: ProductService) {}

    getProduct(req: Request, res: Response): void {
      const { productId } = req.params;
      const product = this.productService.getProduct(productId);
      if(product) res.status(200).json(product);
      else res.status(404).send()
    }

    getProducts(req: Request, res: Response): void {
        const list = this.productService.getProducts();
        res.status(200).json(list);
    }
}