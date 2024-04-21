import express from "express";
import conectaDataBase from "./config/dbconnect.js";
import routes from "../routes/index.js";

const conexao = await conectaDataBase();

conexao.on("error", (erro) => {
    console.error("Erro de conexão", erro);
});

conexao.once("open", () => {
    console.log("Conexão com o banco de dados feita com sucesso!");
})

const app = express();
routes(app);


app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);   
    livros.splice(index, 1);
    res.status(200).send("Livro removido com Sucesso!");
});

export default app;