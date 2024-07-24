import mongoose from "mongoose";

async function conectar(){
    mongoose.connect("mongodb://localhost:27017/livros");

  return mongoose.connection;
};

export default conectar;