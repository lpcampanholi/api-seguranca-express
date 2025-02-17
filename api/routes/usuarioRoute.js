const { Router } = require("express");
const UsuarioController = require("../controllers/usuarioController");
const autenticado = require("../middlewares/autenticado");

const router = Router();

router.use(autenticado);

router
  .post("/usuarios", UsuarioController.cadastrar)
  .get("/usuarios", UsuarioController.buscarTodos)
  .get("/usuarios/id/:id", UsuarioController.buscarPorId)
  .put("/usuarios/id/:id", UsuarioController.editar)
  .delete("/usuarios/id/:id", UsuarioController.excluirPorId);

module.exports = router;
