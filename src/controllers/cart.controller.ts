import { Request, Response } from 'express'
import { CartService } from '../services/cart.service';

export class CartController {
    constructor(private cartService: CartService) {}

    createCart(req: Request, res: Response): any {
      const userId = req.headers['x-user-id'];
      const cart = this.cartService.createCart(userId as string);
      res.status(200)
      res.json({
        error: null,
        data: { cart }
      })
    }
  
    getCartByUserId(req: Request, res: Response) {
      const userId = req.headers['x-user-id'];
      const cart = this.cartService.getCart(userId as string)
      res.status(200)
      res.json({
        error: null,
        data: { cart }
      })
  
    }
  
    updateCart(req: Request, res: Response) {
      const userId = req.headers['x-user-id']
        const { productId, count } = req.body
        const cart = this.cartService.updateCart(userId as string, productId, count)
        if (cart) {
          res.json(cart);
        } else {
          res.status(404).json({ message: "Cart or User not found" });
        }
    }

    checkout(req: Request, res: Response) {
      const userId = req.headers['x-user-id']
      const order = this.cartService.checkout(userId as string)
      if (order) {
        res.status(200)
        res.json(order);
      } else {
        res.status(404).json({ message: "Cart or User not found" });
      }
    }

    emptyCart(req: Request, res: Response) {
      const userId = req.headers['x-user-id']
      this.cartService.emptyCart(userId as string)
      const cart = this.cartService.getCart(userId as string)
      if (cart) {
        res.json(cart);
      } else {
        res.status(404).json({ message: "Cart or User not found" });
      }
    }
}