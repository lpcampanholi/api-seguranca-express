import { Request, Response } from "express";
import SegurancaService from "../services/segurancaService.ts";

const segurancaService = new SegurancaService();

class SegurancaController {
  static async cadastrarAcl(request: Request, response: Response) {
    /*
    dto:
    {
        "usuarioId": 1,
        "roles": [2, 3], 
        "permissoes": [5, 7]
    }
  */
    const { roles, permissoes } = request.body;
    const { usuarioId } = request.usuarioId;

    try {
      const acl = await segurancaService.cadastrarAcl({
        roles,
        permissoes,
        usuarioId,
      });
      response.status(201).json(acl);
    } catch (error) {
      response.status(400).json({ message: error.message });
    }
  }
}

export default SegurancaController;
