import { Router } from "express";
import ProdutoController from "../controllers/produtoController";

const router = Router();

router
  .post("/produtos", ProdutoController.cadastrarProduto)
  .get("/produtos", ProdutoController.buscarTodosProdutos)
  .get("/produtos/:id", ProdutoController.buscarProdutoPorId)
  .delete("/produtos/:id", ProdutoController.deletarProdutoPorId)
  .put("/produtos/:id", ProdutoController.editarProduto);

export default router;
