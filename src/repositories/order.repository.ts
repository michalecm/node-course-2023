import { CartEntity } from '../models/cart.entity'
import { OrderEntity } from '../models/order.entity'
import { ProductEntity } from '../models/product.entity'
import uuid from 'uuid4'

let orders: Array<OrderEntity> = []

export class OrderRepository {
    getOrder(orderId: string) { 
        const order = orders.find(order => order.id === orderId)
        const orderExists = !!order
        if(!orderExists) throw new Error("Order does not exist.")
        return order;
    }

    placeOrder(newOrder: OrderEntity ) {
        const order = orders.find(order => order.id === newOrder.id)
        const orderExists = !!order
        if(orderExists) throw new Error("Order exists.")
        orders = [...orders, newOrder]
        return newOrder
    }
}