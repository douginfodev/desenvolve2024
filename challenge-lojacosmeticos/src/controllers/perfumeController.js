import { perfume } from "../models/Perfume.js";

class PerfumeController {

  static async listarPerfumes (req, res) {
    try {
      const listaPerfumes = await perfume.find({});
      res.status(200).json(listaPerfumes);
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na requisição` });
    }
  };

  static listarAutorPorId = async (req, res) => {
    try {
      const id = req.params.id;

      const perfumeResultado = await perfume.findById(id);

      res.status(200).send(perfumeResultado);
    } catch (erro) {
      res.status(400).send({message: `${erro.message} - Id do Perfume não localizado.`});
    }
  }

  static async cadastrarPerfume (req, res) {
    try {
      const novoPerfume = await perfume.create(req.body);
      res.status(201).json({ message: "criado com sucesso", perfume: novoPerfume });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha ao cadastrar autor` });
    }
  }

  static async atualizarPerfume (req, res) {
    try {
      const id = req.params.id;
      await perfume.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "perfume atualizado" });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na atualização` });
    }
  };

  static async excluirPerfume (req, res) {
    try {
      const id = req.params.id;
      await perfume.findByIdAndDelete(id);
      res.status(200).json({ message: "perfume excluído com sucesso" });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na exclusão` });
    }
  };
};

export default PerfumeController;