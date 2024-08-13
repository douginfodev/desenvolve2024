//import { Int32 } from "mongodb";
import mongoose from "mongoose";

const perfumeSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    genero: {type: String, required:true},
    marca:  {type: String, required:true},
    linha:  {type: String, required:true},
    concentracao: {type: String},
    subfamilia: [String],
    quantidade: {type: Number, default: 0},
    preco: {type: Number},
    desconto: {type: Number, default: 0},
    pagtovezes: {type: Number, default: 0},
    lancamento: {type: Boolean, default: false},
    titulo: {type: String, required:true}   
});

const perfume = mongoose.model("perfumes",perfumeSchema);

export default perfume;