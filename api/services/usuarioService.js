const database = require("../models");
const { hash } = require("bcryptjs");
const uuid = require("uuid");

class UsuarioService {
  async cadastrar(dto) {
    const usuario = await database.usuarios.findOne({
      where: {
        email: dto.email,
      },
    });
    if (usuario) {
      throw new Error("Usuário já cadastrado");
    }
    try {
      const senhaHasheada = await hash(dto.senha, 8);
      const novoUsuario = await database.usuarios.create({
        id: uuid.v4(),
        nome: dto.nome,
        email: dto.email,
        senha: senhaHasheada,
      });
      return novoUsuario;
    } catch (error) {
      throw error;
    }
  }

  async buscarPorId(id) {
    const usuario = await database.usuarios.findOne({
      where: {
        id: id,
      },
    });
    if (!usuario) {
      throw new Error("Usuário informado não encontrado");
    }
    return usuario;
  }

  async buscarTodos() {
    const usuarios = await database.usuarios.findAll();
    return usuarios;
  }

  async editar(dto) {
    const usuario = await database.usuarios.findOne({
      where: {
        id: dto.id,
      },
    });
    if (!usuario) {
      throw new Error("Usuário informado não cadastrado");
    }
    try {
      usuario.nome = dto.nome;
      usuario.email = dto.email;
      usuario.senha = dto.senha;
      await produto.save();
      return produto.reload();
    } catch (error) {
      throw error;
    }
  }

  async excluirPorId(id) {
    const usuario = await database.usuarios.findOne({
      where: {
        id: id,
      },
    });
    if (!usuario) {
      throw new Error("Usuário informado não cadastrado");
    }
    try {
      await database.usuarios.destroy({
        where: {
          id: id,
        },
      });
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UsuarioService;
