import express from "express";
import PerfumeController from "../controllers/perfumeController.js";


const routes = express.Router();

routes.get("/perfume", PerfumeController.listarPerfumes);
routes.get("/perfume/:id", PerfumeController.listarPerfumePorId);
routes.post("/perfume", PerfumeController.cadastrarPerfume);
routes.put("/perfume/:id", PerfumeController.atualizarPerfume);
routes.delete("/perfume/:id", PerfumeController.excluirPerfume);

export default routes;