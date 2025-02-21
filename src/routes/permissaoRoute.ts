import { Router } from "express";
import PermissaoController from "../controllers/permissaoController";

const router = Router();

router
  .post("/permissoes", PermissaoController.cadastrar)
  .get("/permissoes", PermissaoController.buscarTodos)
  .get("permissoes/:id", PermissaoController.buscarPorId)
  .put("/permissoes/:id", PermissaoController.editar)
  .delete("/permissoes/:id", PermissaoController.excluir);

export default router;
