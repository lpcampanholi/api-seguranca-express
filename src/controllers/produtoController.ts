import { Request, Response } from "express";
import ProdutoService from "../services/produtoService";

const produtoService = new ProdutoService();

class ProdutoController {
  static async cadastrarProduto(request: Request, response: Response) {
    const { nome, descricao, preco } = request.body;
    try {
      const produto = await produtoService.cadastrarProduto({
        nome,
        descricao,
        preco,
      });
      response.status(201).json(produto);
    } catch (error) {
      console.log("Message error: ", error.message);
      response.status(400).json({ message: error.message });
    }
  }

  static async buscarTodosProdutos(request: Request, response: Response) {
    const produtos = await produtoService.buscarTodosProdutos();
    response.status(200).json(produtos);
  }

  static async buscarProdutoPorId(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const produto = await produtoService.buscarProdutoPorId(id);
      response.status(200).json(produto);
    } catch (error) {
      console.log("Message error: ", error.message);
      response.status(400).json({ message: error.message });
    }
  }

  static async editarProduto(request: Request, response: Response) {
    const { id } = request.params;
    const { nome, descricao, preco } = request.body;
    try {
      const produto = await produtoService.editarProduto({
        id,
        nome,
        descricao,
        preco,
      });
      response.status(200).json(produto);
    } catch (error) {
      console.log("Message error: ", error.message);
      response.status(400).json({ message: error.message });
    }
  }

  static async deletarProdutoPorId(request: Request, response: Response) {
    const { id } = request.params;
    try {
      await produtoService.deletarProdutoPorId(id);
      response.status(200).json({ message: "Produto excluído com sucesso!" });
    } catch (error) {
      console.log("Message error: ", error.message);
      response.status(400).json({ message: error.message });
    }
  }
}

export default ProdutoController;
