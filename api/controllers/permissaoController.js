const PermissaoService = require("../services/permissaoService");

const permissaoService = new PermissaoService();

class PermissaoController {
  static async cadastrar(req, res) {
    const { nome, descricao } = req.body;
    try {
      const permissao = await permissaoService.cadastrar({ nome, descricao });
      res.status(201).json(permissao);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async buscarTodos(req, res) {
    const permissoes = await permissaoService.buscarTodos();
    res.status(200).json(permissoes);
  }

  static async buscarPorId(req, res) {
    const { id } = req.params;
    try {
      const permissao = await permissaoService.buscarPorId(id);
      res.status(200).json(permissao);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async editar(req, res) {
    const { id } = req.params;
    const { nome, descricao } = req.body;
    try {
      const permissao = await permissaoService.editar({
        id,
        nome,
        descricao,
      });
      res.status(200).json(permissao);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async excluir(req, res) {
    const { id } = req.params;
    try {
      await permissaoService.excluirPorId(id);
      res.status(200).json({ message: "Permissão excluída com sucesso" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = PermissaoController;
