import { CartEntity } from "../models/cart.entity";
import { OrderEntity } from "../models/order.entity";
import { CartRepository } from "../repositories/cart.repository";
import { OrderService } from "./order.service";
import { ProductService } from "./product.service";

export class CartService {

    cartRepository: CartRepository;
    orderService: OrderService;
    productService: ProductService;

    constructor(cartRepository: CartRepository, orderService: OrderService, productService: ProductService) {
        this.cartRepository = cartRepository;
        this.orderService = orderService
        this.productService = productService;
    }

    getCart(userId: string){
        try{
            const cart = this.cartRepository.getCart(userId)
            return cart; 
        }
        catch(e) {
            return this.createCart(userId)
        }
    }

    createCart(userId: string) {
        return this.cartRepository.createCart(userId)
    }

    updateCart(userId: string, productId: string, count: number): CartEntity{
        const product = this.productService.getProducts().find(p => p.id === productId)
        if(!product) throw new Error("item not available")
        const cartItem = { product, count}
        return this.cartRepository.addItemToCart(userId, cartItem);
    }

    emptyCart(userId: string) {
        return this.cartRepository.emptyCart(userId)
    }

    checkout(userId: string): OrderEntity {
        const cart = this.cartRepository.getCart(userId)
        this.cartRepository.emptyCart(userId)
        return this.orderService.placeOrder(cart)
    }
}