import { Request, Response } from "express";
import AuthService from "../services/authService";

const authService = new AuthService();

class AuthController {
  static async login(request: Request, response: Response) {
    const { email, senha } = request.body;
    try {
      const token = await authService.login({ email, senha });
      response.status(200).json(token);
    } catch (error) {
      response.status(401).json({ message: error.message });
    }
  }
}

export default AuthController;
