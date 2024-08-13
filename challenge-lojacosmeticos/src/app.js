/*import express from "express";
import conectar from "./config/dbconect/dbConnect.js";
import sabonetes from "./models/Sabonete.js";

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

app.get("/sabonete",async (req , res) =>{
  const listAll = await sabonetes.find({})  
  res.status(200).json(listAll);
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
})*/
import express from "express";
import conectaNaDatabase from "./config/dbconect/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
  console.error("erro de conexão", erro);
});

conexao.once("open", () => {
  console.log("Conexao com o banco feita com sucesso");
})

const app = express();
app.use(express.json());
routes(app);

export default app;