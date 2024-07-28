import express from "express";
import SaboneteController from "../controllers/saboneteController.js";

const routes = express.Router();

routes.get("/sabonetes", SaboneteController.listarAutores);
routes.get("/sabonetes/:id", SaboneteController.listarAutorPorId);
routes.post("/sabonetes", SaboneteController.cadastrarAutor);
routes.put("/sabonetes/:id", SaboneteController.atualizarAutor);
routes.delete("/sabonetes/:id", SaboneteController.excluirAutor);

export default routes;