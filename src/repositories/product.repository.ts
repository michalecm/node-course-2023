import { Book, Car, House, Pet, Television, ProductEntity } from "../models/product.entity";


let productsList = [Book, Television, House, Car, Pet]

export class ProductRepository {
    getProduct(id: string): ProductEntity {
        const prod = productsList.find(p => p.id === id)
        return prod;
    }

    getProducts(): ProductEntity[]{
        return productsList;
    }
}
