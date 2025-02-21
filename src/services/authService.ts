import database from "../models";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import jsonSecret from "../config/jsonSecret";

class AuthService {
  async login(dto) {
    const usuario = await database.usuarios.findOnde({
      attributes: ["id", "email", "senha"],
      where: {
        email: dto.email,
      },
    });
    if (!usuario) {
      throw new Error("Usuário informado não cadastrado");
    }
    const senhasIguais = await compare(dto.senha, usuario.senha);
    if (!senhasIguais) {
      throw new Error("Usuário ou senha inválido");
    }
    const accessToken = sign(
      {
        id: usuario.id,
        email: usuario.email,
      },
      jsonSecret.secret,
      {
        expiresIn: 86400, // 24h
      }
    );
    return { accessToken };
  }
}

export default AuthService;
