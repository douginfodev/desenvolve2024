import { Int32 } from "mongodb";
import mongoose from "mongoose";

const perfumesSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    genero: {type: String, required:true},
    marca:  {type: String, required:true},
    linha:  {type: String, required:true},
    concentracao: {type: String},
    subfamilia: [String],
    quantidade: {type: Int32, default: 0},
    preco: {type: Number},
    desconto: {type: Int32, default: 0},
    pagtovezes: {type: Int32, default: 0},
    lancamento: {type: Boolean, default: false},
    titulo: {type: String, required:true}   
});

const perfumes = mongoose.model("perfumesteste",perfumesSchema);

export default perfumes;