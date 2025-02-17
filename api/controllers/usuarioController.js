const UsuarioService = require("../services/usuarioService");

const usuarioService = new UsuarioService();

class UsuarioController {
  static async cadastrar(req, res) {
    const { nome, email, senha } = req.body;
    try {
      const usuario = await usuarioService.cadastrar({ nome, email, senha });
      res.status(201).json(usuario);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async buscarTodos(req, res) {
    try {
      const usuarios = await usuarioService.buscarTodos();
      res.status(200).json(usuarios);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async buscarPorId(req, res) {
    const { id } = req.params;
    try {
      const usuario = await usuarioService.buscarPorId(id);
      res.status(200).json(usuario);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async editar(req, res) {
    const { id } = req.params;
    const { nome, email, senha } = req.body;
    try {
      const usuario = await usuarioService.editar({
        id,
        nome,
        email,
        senha,
      });
      res.status(200).json(usuario);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async excluirPorId(req, res) {
    const { id } = req.params;
    try {
      await usuarioService.excluirPorId(id);
      res.status(200).json({ message: "Usuário excluído com sucesso" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = UsuarioController;
