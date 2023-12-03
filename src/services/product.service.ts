import { ProductRepository } from "../repositories/product.repository";

export class ProductService {

    productRepository: ProductRepository;

    constructor(repository: ProductRepository) {
        this.productRepository = repository;
    }

    getProduct(id: string) {
        return this.productRepository.getProduct(id)
    }

    getProducts(){
        return this.productRepository.getProducts()
    }
}