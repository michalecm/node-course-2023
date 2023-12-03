import { UserRepository } from '../../repositories/user.repository'
import { AuthService } from '../../services/auth.service'
import { AuthController } from '../../controllers/auth.controller'
import { Router } from "express";

const userRepository = new UserRepository();
const authService = new AuthService(userRepository);
const authController = new AuthController(authService);

const authRouter = Router();

authRouter.post("/register", authController.register.bind(authController));

export default authRouter;  