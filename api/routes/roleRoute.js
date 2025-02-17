const { Router } = require("express");
const RoleController = require("../controllers/roleController");

const router = Router();

router
  .post("/routes", RoleController.cadastrar)
  .get("/roles", RoleController.buscarTodos)
  .get("/routes/:id", RoleController.buscarPorId)
  .put("/routes/:id", RoleController.editar)
  .delete("/routes/:id", RoleController.excluirPorId);

module.exports = router;
