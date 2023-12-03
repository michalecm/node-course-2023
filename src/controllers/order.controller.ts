import { Request, Response } from 'express'
import { OrderService } from '../services/order.service';
import { CartService } from '../services/cart.service';

export class OrderController {

    constructor(private orderService: OrderService, private cartService: CartService) {}

    createOrder(req: Request, res: Response): void {
      const userId = req.headers['x-user-id']
      const cart = this.cartService.getCart(userId as string)
      const order = this.orderService.placeOrder(cart);
      res.status(201).json(order);
    }
}