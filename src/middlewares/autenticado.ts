import { Request, Response, NextFunction, RequestHandler } from "express";
import { verify, decode } from "jsonwebtoken";
import jsonSecret from "../config/jsonSecret";

const autenticado: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).send("Access token não informado");
  }
  const [, accessToken] = token.split(" ");
  try {
    verify(accessToken, jsonSecret.secret);
    const { id, email } = await decode(accessToken);
    req.usuarioId = id;
    req.usuarioEmail = email;
    return next();
  } catch (error) {
    res.status(401).send("Usuário não autorizado");
  }
};

export default autenticado;
