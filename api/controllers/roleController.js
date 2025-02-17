const RoleService = require("../services/roleService");

const roleService = new RoleService();

class RoleController {
  static async cadastrar(req, res) {
    const { nome, descricao } = req.body;
    try {
      const role = await roleService.cadastrar({ nome, descricao });
      res.status(201).json(role);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async buscarTodos(req, res) {
    try {
      const roles = await roleService.buscarTodos();
      res.status(200).json(roles);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async buscarPorId(req, res) {
    const { id } = req.params;
    try {
      const role = await roleService.buscarPorId(id);
      res.status(200).json(role);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async editar(req, res) {
    const { id } = req.params;
    const { nome, email, senha } = req.body;
    try {
      const role = await roleService.editar({
        id,
        nome,
        descricao,
      });
      res.status(200).json(role);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async excluirPorId(req, res) {
    const { id } = req.params;
    try {
      await roleService.excluirPorId(id);
      res.status(200).json({ message: "Role excluído com sucesso" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = RoleController;
