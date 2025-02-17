const AuthService = require("../services/authService");
const authService = new AuthService();

class AuthController {
  static async login(req, res) {
    const { email, senha } = req.body;
    try {
      const token = await authService.login({ email, senha });
      res.status(200).send(token);
    } catch (error) {
      res.status(401).send({ message: error.message });
    }
  }
}

module.exports = AuthController;
