import express from "express";
import livroController from "../controller/livroController";

const routes = express.Router();

routes.get("/livros", livroController.listarLivros);
routes.get("/livros/busca", livroController.listarLivroPorEditora)
routes.get("/livros/:id", livroController.listarLivroPorId);
routes.post("/livros", livroController.cadastrarLivro);
routes.put("/livros/:id", livroController.atualizarLivro);
routes.delete("/livros/:id", livroController.excluirLivro)

export default routes;