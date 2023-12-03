import express from 'express'
import authRouter from './api/auth.router'
import productRouter from './api/product.router';
import cartRouter from './api/cart.router';

const router = express.Router();

router.use('/api/auth', authRouter);
router.use('/api/products', productRouter);
router.use('/api/profile', cartRouter);
router.use('/api/products', productRouter)

export default router;

