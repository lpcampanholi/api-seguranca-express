const database = require("../models");
const uuid = require("uuid");

class RoleService {
  async cadastrar(dto) {
    const role = await database.roles.findOne({
      where: {
        email: dto.email,
      },
    });
    if (role) {
      throw new Error("Role já cadastrado");
    }
    try {
      const newRole = await database.roles.create({
        id: uuid.v4(),
        nome: dto.nome,
        descricao: dto.descricao,
      });
      return newRole;
    } catch (error) {
      throw new Error("Erro ao cadastrar role");
    }
  }

  async buscarTodos() {
    const roles = await database.roles.findAll();
    return roles;
  }

  async buscarPorId(id) {
    const role = await database.roles.findOne({
      where: {
        id: id,
      },
    });
    if (!role) {
      throw new Error("Role informado não encontrado");
    }
    return role;
  }

  async editar(dto) {
    const role = await this.buscarPorId(dto.id);
    try {
      role.nome = dto.nome;
      role.email = dto.email;
      await role.save();
      return await role.reload();
    } catch (error) {
      throw new Error("Erro ao editar role");
    }
  }

  async excluirPorId(id) {
    await this.buscarPorId(id);
    try {
      await database.roles.destroy({
        where: {
          id: id,
        },
      });
    } catch (error) {
      throw new Error("Erro ao excluir role");
    }
  }
}

module.exports = RoleService;
