import { Router } from "express";
import RoleController from "../controllers/roleController";

const router = Router();

router
  .post("/roles", RoleController.cadastrar)
  .get("/roles", RoleController.buscarTodos)
  .get("/roles/:id", RoleController.buscarPorId)
  .put("/roles/:id", RoleController.editar)
  .delete("/roles/:id", RoleController.excluirPorId);

export default router;
