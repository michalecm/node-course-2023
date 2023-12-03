import { Request, Response } from 'express'
import { AuthService } from '../services/auth.service';

export class AuthController {
    constructor(private authService: AuthService) {}

    register(req: Request, res: Response): void {
      const { name, email } = req.body;
      const auth = this.authService.createUser();
      res.status(201).json(auth);
    }
}