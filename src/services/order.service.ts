import { CartEntity, CartItemEntity } from "../models/cart.entity";
import { OrderEntity } from "../models/order.entity";
import { ProductEntity } from "../models/product.entity";
import { OrderRepository } from "../repositories/order.repository";
import uuid4 from "uuid4";

export class OrderService {
    orderRepository: OrderRepository
    constructor(private repository: OrderRepository){
        this.orderRepository = repository;
    }

    placeOrder(cart: CartEntity): OrderEntity{
        const newOrder: OrderEntity = {
            id: uuid4(),
            cartId: cart.id,
            items: cart.items,
            userId: cart.userId,
            payment: {
                type: "DEBIT",
                address: "HUNGARY",
                creditCard: "1234-1234-1234-1234"
            },
            delivery: {
                type: "POST",
                address: "HUNGARY"
            },
            comments: "",
            status: 'created',
            total: this.calculateTotal(cart.items)

        }

        return this.orderRepository.placeOrder(newOrder)
    }

    private calculateTotal(cartItems: CartItemEntity[]) {
        return cartItems.map(i => i.count * i.product.price).reduce((sum, curr) => sum += curr, 0)
    }
}