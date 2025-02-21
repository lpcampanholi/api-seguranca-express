import { Request, Response } from "express";
import RoleService from "../services/roleService";

const roleService = new RoleService();

class RoleController {
  static async cadastrar(request: Request, response: Response) {
    const { nome, descricao } = request.body;
    try {
      const role = await roleService.cadastrar({ nome, descricao });
      response.status(201).json(role);
    } catch (error) {
      response.status(400).json({ message: error.message });
    }
  }

  static async buscarTodos(request: Request, response: Response) {
    try {
      const roles = await roleService.buscarTodos();
      response.status(200).json(roles);
    } catch (error) {''
      response.status(500).json({ message: error.message });
    }
  }

  static async buscarPorId(request: Request, response: Response) {
    const { id } = request.params;
    try {
      const role = await roleService.buscarPorId(id);
      response.status(200).json(role);
    } catch (error) {
      response.status(500).json({ message: error.message });
    }
  }

  static async editar(request: Request, response: Response) {
    const { id } = request.params;
    const { nome, descricao } = request.body;
    try {
      const role = await roleService.editar({
        id,
        nome,
        descricao,
      });
      response.status(200).json(role);
    } catch (error) {
      response.status(500).json({ message: error.message });
    }
  }

  static async excluirPorId(request: Request, response: Response) {
    const { id } = request.params;
    try {
      await roleService.excluirPorId(id);
      response.status(200).json({ message: "Role excluído com sucesso" });
    } catch (error) {
      response.status(500).json({ message: error.message });
    }
  }
}

export default RoleController;
