const { Router } = require("express");
const PermissaoController = require("../controllers/permissaoController");

const router = Router();

router
  .post("/permissoes", PermissaoController.cadastrar)
  .get("/permissoes", PermissaoController.buscarTodos)
  .get("permissoes/:id", PermissaoController.buscarPorId)
  .put("/permissoes/:id", PermissaoController.editar)
  .delete("/permissoes/:id", PermissaoController.excluir);

module.exports = router;
