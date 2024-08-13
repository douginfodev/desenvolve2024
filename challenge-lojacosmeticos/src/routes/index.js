import express from "express";
import perfumes from "./perfumesRoutes.js";
//import autores from "./autoresRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send({titulo: "Curso de node"});
  });

  app.use(
    express.json(),
    perfumes
  );
};

export default routes;