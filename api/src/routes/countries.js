const express = require("express");
const router = express.Router();
const { Op } = require("sequelize");
const { Country, Activity } = require("../db.js");

router.get("/", async (req, res) => {
  try {
    const DBpais = await Country.findAll({ include: Activity });
    res.status(200).send(DBpais);
  } catch (err) {
    res.status(404).json({ error: err });
  }
});

router.get("/order/:population", async (req, res) => {
  const { population } = req.params;
  try {
    if (population == "Asc") {
      const desc = await Country.findAll({
        order: [["population", "DESC"]],
      });

      res.status(200).json(desc);
    }
    if (population == "Desc") {
      const asc = await Country.findAll({
        order: [["population", "ASC"]],
      });

      res.status(200).json(asc);
    }
    if (population == "A-Z") {
      const alph = await Country.findAll({
        order: [["name", "ASC"]],
      });
      res.status(200).json(alph);
    }
    if (population == "Z-A") {
      const alph = await Country.findAll({
        order: [["name", "DESC"]],
      });
      res.status(200).json(alph);
    }
  } catch (err) {
    res.json({ error: err });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  const resultado = await Country.findByPk(id, { include: Activity });
  res.status(200).json({ resultado });
});

router.get("/search/nombre", async (req, res) => {
  const { name } = req.query;
  if (name) {
    const resultado = await Country.findAll({
      where: {
        name: { [Op.iLike]: `%${name}%` },
      },
    });
    if (resultado === null) {
      return res.status(404).json({ error: "No hay un país correspondiente" });
    }
    res.status(200).json(resultado);
  }
});

module.exports = router;
