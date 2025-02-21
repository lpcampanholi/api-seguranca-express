import database from "../models";

class PermissaoService {
  async cadastrar(dto) {
    const permissao = await database.permissoes.findOne({
      where: {
        id: dto.id,
      },
    });
    if (permissao) {
      throw new Error("Permissão já cadastrada");
    }
    try {
      const novaPermissao = await database.permissoes.create({
        id: uuid.v4(),
        nome: dto.nome,
        descricao: dto.descricao,
      });
      return novaPermissao;
    } catch (error) {
      throw new Error("Erro ao cadastrar permissão");
    }
  }

  async buscarTodos() {
    const permissoes = await database.permissoes.findAll();
    return permissoes;
  }

  async buscarPorId(id) {
    const permissao = await database.permissoes.findOne({
      where: {
        id: id,
      },
    });
    if (!permissao) {
      throw new Error("Permissão informada não encontrado");
    }
    return permissao;
  }

  async editar(dto) {
    const permissao = await this.buscarPorId(dto.id);
    try {
      permissao.nome = dto.nome;
      permissao.descricao = dto.descricao;
      await permissao.save();
      return permissao;
    } catch (error) {
      throw new Error("Erro ao editar permissão");
    }
  }

  async excluirPorId(id) {
    await this.buscarPorId(id);
    try {
      await database.permissoes.destroy({
        where: {
          id: id,
        },
      });
    } catch (error) {
      throw new Error("Erro ao tentar permissão");
    }
  }
}

export default PermissaoService;
