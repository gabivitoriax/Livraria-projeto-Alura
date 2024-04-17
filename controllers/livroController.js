import livro from "../src/models/livro.js";
import autor from "../src/models/Autor.js";

class livroController {

    static async listarLivros(req, res) {
        try {
        const listaLivros = await livro.find({});
        res.status(200).json(listaLivros);
    } catch (erro) {
        res.status(500).json({message: `${erro.message} - falha na requisição`});
        }
    };

    static async listarLivroPorId (req, res) {
        try {
        const id = req.params.id;
        const livroEncontrado = await livro.findById(id);
        res.status(200).json(livroEncontrado);
    } catch (erro) {
        res.status(500).json({message: `${erro.message} - falha na requisição do livro`});
        }
    };
    
    static async cadastrarLivro (req, res){
        const novoLivro = req.body;
        try {
            const autorEncontrado = await autor.findById(novoLivro.autor);
            const livroCompleto = {...novoLivro, autor: {...autorEncontrado._doc}};
            const livroCriado = await livro.create(livroCompleto);
            res.status(201).json({ message: "Criado com Sucesso", livro: livroCriado});
        } catch (erro) {
        res.status(500).json({message: `${erro.message} - falha ao cadastrar o livro`});
        } 
    }

    static async atualizarLivro (req, res) {
        try {
        const id = req.params.id;
        await livro.findByIdAndUpdate(id, req.body);
        res.status(200).json({message:"Livro Atualizado!"});
    } catch (erro) {
        res.status(500).json({message: `${erro.message} - falha na atualização`});
    }   
};
    static async escluirLivro (req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({message:"Livro excluido com sucesso" });
        } catch (erro) {
            res.status(500).json({message: `${erro.message} falha na exlusão`});
        }
    };
    static async listarLivroPorEditora (req, res) {
        const editora = req.query.editora;
        try {
            const livrosPorEditora = await livro.find({editora: editora});
            res.status(200).json(livrosPorEditora);      
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falaha na busca`});
        }
    };
};

export default livroController;
