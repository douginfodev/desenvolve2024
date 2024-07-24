import express from "express";
import conectar from "./config/dbconect/dbConnect.js";

const conexao = await conectar();

conexao.on("error",(erro) =>{
  console.error("Erro na conexao",erro);
});

conexao.once("open",() =>{
  console.log("Conexao com o banco feita com sucesso");
})

const app = express();

const livros = [{
  "id": 1,
  "nome": "Livro 1"
},{
  "id": 2,
  "nome": "Livro 2"
}];

function buscaLivro(id) {
    return livros.findIndex(livro => {
      return livro.id === Number(id);
    })
   }

app.get("/",(req , res) =>{
    res.status(200).send("Curso de Node");
})

app.get("/livros",(req , res) =>{
    res.status(200).json(livros);
})

app.post("/livros",(req , res) =>{
    livros.push(req.body);
    res.status(201).send("Livro incuido com sucesso");
})

app.put("/livros/:id",(req , res) =>{
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(201).json(livros);
})

app.delete("/livros/:id",(req , res) =>{
    const index = buscaLivro(req.params.id);
    livros.splice(index,1);
    res.status(204).send("Livro removido!");
})

export default app;