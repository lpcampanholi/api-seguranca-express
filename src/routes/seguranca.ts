import { Router } from "express";
import SegurancaController from "../controllers/segurancaController";

const router = Router();

router.post("/seguranca/acl", SegurancaController.cadastrarAcl);

export default router;
