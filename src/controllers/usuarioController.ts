import { Request, Response } from "express";
import UsuarioService from "../services/usuarioService";

const usuarioService = new UsuarioService();

class UsuarioController {
  static async cadastrar(request: Request, response: Response) {
    const { nome, email, senha } = request.body;
    try {
      const usuario = await usuarioService.cadastrar({ nome, email, senha });
      response.status(201).json(usuario);
    } catch (error) {
      response.status(400).json({ message: error.message });
    }
  }

  static async buscarTodos(request: Request, response: Response) {
    try {
      const usuarios = await usuarioService.buscarTodos();
      response.status(200).json(usuarios);
    } catch (error) {
      response.status(500).json({ message: error.message });
    }
  }

  static async buscarPorId(request: Request, response: Response) {
    const { id } = request.params;
    try {
      const usuario = await usuarioService.buscarPorId(id);
      response.status(200).json(usuario);
    } catch (error) {
      response.status(500).json({ message: error.message });
    }
  }

  static async editar(request: Request, response: Response) {
    const { id } = request.params;
    const { nome, email, senha } = request.body;
    try {
      const usuario = await usuarioService.editar({
        id,
        nome,
        email,
        senha,
      });
      response.status(200).json(usuario);
    } catch (error) {
      response.status(500).json({ message: error.message });
    }
  }

  static async excluirPorId(request: Request, response: Response) {
    const { id } = request.params;
    try {
      await usuarioService.excluirPorId(id);
      response.status(200).json({ message: "Usuário excluído com sucesso" });
    } catch (error) {
      response.status(500).json({ message: error.message });
    }
  }
}

export default UsuarioController;
