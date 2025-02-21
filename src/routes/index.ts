import bodyParser from "body-parser";
import produto from "./produtoRoute";
import usuario from "./usuarioRoute";
import auth from "./authRoute";
import role from "./roleRoute";
import permissao from "./permissaoRoute";
import seguranca from "./seguranca";

module.exports = (app) => {
  app.use(
    bodyParser.json(),
    auth,
    usuario,
    produto,
    role,
    permissao,
    seguranca
  );
};
