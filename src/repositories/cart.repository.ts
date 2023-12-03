import { CartEntity, CartItemEntity } from '../models/cart.entity'
import uuid4 from "uuid4";

let carts: Array<CartEntity> = []

export class CartRepository {
    getCart(userId: string) { 
        const cart = carts.find(cart => cart.userId === userId)
        const existsAlready = !!cart
        if(existsAlready) return cart;
        else throw new Error("cart not found")
    }

    createCart(userId: string) {
        const existsAlready = !!carts.find(cart => cart.userId === userId)
        if(existsAlready) throw new Error('Cannot create cart, because user already has an active cart.')
        const cart: CartEntity = {
            id: uuid4(),
            userId,
            items: [],
            isDeleted: false
        }
        carts = [...carts, cart]
        return cart;
    }

    addItemToCart(userId: string, product: CartItemEntity): CartEntity {
        const cart = carts.find(cart => cart.userId === userId)
        const existsAlready = !!cart
        if(!existsAlready) throw new Error("cart not found")
        const isItemInCart = cart.items.find(i => i.product.id === product.product.id)
        if(isItemInCart) {
            const newItem = { product: isItemInCart.product, count: isItemInCart.count + product.count}
            cart.items = [...cart.items.filter(i => i.product.id !== product.product.id), newItem]
        } else {
            cart.items.push(product)
        }
        carts = [...carts.filter(c => c.id === cart.id), cart]
        return cart;
    }

    emptyCart(userId: string) {
        carts = carts.filter(cart => cart.userId !== userId)
        this.createCart(userId)
        return carts.find(cart => cart.userId === userId)
    }
}