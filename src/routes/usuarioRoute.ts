import { Router } from "express";
import UsuarioController from "../controllers/usuarioController";
import autenticado from "../middlewares/autenticado";

const router = Router();

router.use(autenticado);

router
  .post("/usuarios", UsuarioController.cadastrar)
  .get("/usuarios", UsuarioController.buscarTodos)
  .get("/usuarios/:id", UsuarioController.buscarPorId)
  .put("/usuarios/:id", UsuarioController.editar)
  .delete("/usuarios/:id", UsuarioController.excluirPorId);

export default router;
