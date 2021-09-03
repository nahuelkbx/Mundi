const express = require("express");
const router = express.Router();
const { Op } = require("sequelize");
const { Country, Activity } = require("../db.js");

router.get("/:page", async (req, res) => {
  const { page } = req.params;
  try {
    {
      const DBpais = await Country.findAndCountAll({
        include: [Activity],
        order: [["name", "ASC"]],
        offset: (page - 1) * 10,
        limit: 10,
      });
      res.status(200).send(DBpais);
    }
  } catch (err) {
    res.status(404).json({ error: err });
  }
});

router.get("/filter/:continent/:page", async (req, res) => {
  const { continent, page } = req.params;

  if (continent) {
    const actividad = await Country.findAndCountAll({
      where: {
        continent,
      },
      offset: (page - 1) * 10,
      limit: 10,
    });
    return res.status(200).json(actividad);
  }
  res.status(404).json({ error: "Debe seleccionar una temporada" });
});

router.get("/order/:population/:page", async (req, res) => {
  const { population, page } = req.params;
  try {
    if (population == "Asc") {
      const desc = await Country.findAndCountAll({
        order: [["population", "DESC"]],
        offset: (page - 1) * 10,
        limit: 10,
      });

      res.status(200).json(desc);
    }
    if (population == "Desc") {
      const asc = await Country.findAndCountAll({
        order: [["population", "ASC"]],
        offset: (page - 1) * 10,
        limit: 10,
      });

      res.status(200).json(asc);
    }
    if (population == "A-Z") {
      const alph = await Country.findAndCountAll({
        order: [["name", "ASC"]],
        offset: (page - 1) * 10,
        limit: 10,
      });
      res.status(200).json(alph);
    }
    if (population == "Z-A") {
      const alph = await Country.findAndCountAll({
        order: [["name", "DESC"]],
        offset: (page - 1) * 10,
        limit: 10,
      });
      res.status(200).json(alph);
    }
  } catch (err) {
    res.json({ error: err });
  }
});

router.get("/searchby/:id", async (req, res) => {
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
