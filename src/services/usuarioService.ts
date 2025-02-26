import database from "../models";
import { hash } from "bcryptjs";
import uuid from "uuid";

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
      throw new Error("Erro ao cadastrar usuário");
    }
  }

  async buscarTodos() {
    const usuarios = await database.usuarios.findAll();
    return usuarios;
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

  async editar(dto) {
    const usuario = await this.buscarPorId(dto.id);
    try {
      usuario.nome = dto.nome;
      usuario.email = dto.email;
      await usuario.save();
      return usuario;
    } catch (error) {
      throw new Error("Erro ao editar usuário");
    }
  }

  async excluirPorId(id) {
    await this.buscarPorId(id);
    try {
      await database.usuarios.destroy({
        where: {
          id: id,
        },
      });
    } catch (error) {
      throw new Error("Erro ao tentar usuário");
    }
  }
}

export default UsuarioService;
