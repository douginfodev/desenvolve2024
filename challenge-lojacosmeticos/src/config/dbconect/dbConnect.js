import mongoose from "mongoose";

async function conectar(){
    mongoose.connect(process.env.DB_CONNECTION_STRING);

  return mongoose.connection;
};

export default conectar;