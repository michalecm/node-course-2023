import { NextFunction, Router, Response, Request } from "express";
import { CartController } from "../../controllers/cart.controller";
import { CartRepository } from "../../repositories/cart.repository";
import { CartService } from "../../services/cart.service";
import { OrderService } from "../../services/order.service";
import { OrderRepository } from "../../repositories/order.repository";
import { productService } from "./product.router";
import Joi from "joi";

const productSchema = Joi.object({
    productId: Joi.string().uuid().required(),
    count: Joi.number().min(1).required()
})

function validateInput(req: Request, res: Response, next: NextFunction) {
    const result = productSchema.validate(req.body)
    if(result.error) {
        return res.status(400).json({error: result.error.details})
    }

    next()
}

const cartRouter = Router();
const orderRepository = new OrderRepository()
const cartRepository = new CartRepository();
const orderService = new OrderService(orderRepository);
const cartService = new CartService(cartRepository, orderService, productService);
const cartController = new CartController(cartService);


cartRouter.get("/", cartController.getCartByUserId.bind(cartController));
cartRouter.put("/", validateInput, cartController.updateCart.bind(cartController));
cartRouter.delete("/", cartController.emptyCart.bind(cartController));
cartRouter.post("/checkout", cartController.checkout.bind(cartController));


export default cartRouter;