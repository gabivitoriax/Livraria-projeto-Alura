import  express  from "express";
import AutorController from "../controllers/autorController.js";

const routes = express.Router();

routes.get("/autores", AutorController.listarAutores)
routes.get("/autores/:id", AutorController.listarAutorPorId)
routes.get("/autores", AutorController.cadastrarLivro)
routes.post("/autores", AutorController.cadastrarAutor)
routes.put("/autores", AutorController.listarAutores)
routes.delete("/autores", AutorController.listarAutores)