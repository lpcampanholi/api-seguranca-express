import { Request, Response } from "express";
import PermissaoService from "../services/permissaoService";

const permissaoService = new PermissaoService();

class PermissaoController {
  static async cadastrar(request: Request, response: Response) {
    const { nome, descricao } = request.body;
    try {
      const permissao = await permissaoService.cadastrar({ nome, descricao });
      response.status(201).json(permissao);
    } catch (error) {
      response.status(400).json({ message: error.message });
    }
  }

  static async buscarTodos(request: Request, response: Response) {
    const permissoes = await permissaoService.buscarTodos();
    response.status(200).json(permissoes);
  }

  static async buscarPorId(request: Request, response: Response) {
    const { id } = request.params;
    try {
      const permissao = await permissaoService.buscarPorId(id);
      response.status(200).json(permissao);
    } catch (error) {
      response.status(500).json({ message: error.message });
    }
  }

  static async editar(request: Request, response: Response) {
    const { id } = request.params;
    const { nome, descricao } = request.body;
    try {
      const permissao = await permissaoService.editar({
        id,
        nome,
        descricao,
      });
      response.status(200).json(permissao);
    } catch (error) {
      response.status(500).json({ message: error.message });
    }
  }

  static async excluir(request: Request, response: Response) {
    const { id } = request.params;
    try {
      await permissaoService.excluirPorId(id);
      response.status(200).json({ message: "Permissão excluída com sucesso" });
    } catch (error) {
      response.status(500).json({ message: error.message });
    }
  }
}

export default PermissaoController;
