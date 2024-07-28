import mongoose from "mongoose";

const sabonetesSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    titulo: {type: String, required:true},
    quantidade: {type: Number}
});

const sabonetes = mongoose.model("sabonetes",sabonetesSchema);

export default sabonetes;