const express = require("express");
const router = express.Router();
const axios = require("axios");
const { Op } = require("sequelize");
const { Country, Activity } = require("../db.js");

router.get("/", async (req, res) => {
  try {
    const DBpais = await Country.findAll();
    if (DBpais.length === 0) {
      const paises = await axios.get("https://restcountries.eu/rest/v2/all");
      if (paises.data) {
        for (let i = 0; i < paises.data.length; i++) {
          await Country.create({
            id: paises.data[i].alpha3Code,
            name: paises.data[i].name,
            image: paises.data[i].flag,
            continent: paises.data[i].region,
            capital: paises.data[i].capital,
            subregion: paises.data[i].subregion,
            area: paises.data[i].area,
            population: paises.data[i].population,
          });
        }
      }
      const resultado = await Country.findAll();
      res.status(200).json(resultado);
    } else {
      res.status(200).json(DBpais);
    }
  } catch (err) {
    res.status(404).json({ error: err });
  }
});

router.get("/order/:population", async (req, res) => {
  const { population } = req.params;
  try {
    if (population == "Descendente") {
      const desc = await Country.findAll({
        order: [["population", "DESC"]],
      });

      res.status(200).json(desc);
    }
    if (population == "Ascendente") {
      const asc = await Country.findAll({
        order: [["population", "ASC"]],
      });

      res.status(200).json(asc);
    }
  } catch (err) {
    res.json({ error: err });
  }
});

router.get("/order/alphabetic/:alphabetic", async (req, res) => {
  const { alphabetic } = req.params;
  try {
    if (alphabetic == "A-Z") {
      const alph = await Country.findAll({
        order: [["name", "ASC"]],
      });
      res.status(200).json(alph);
    }
    if (alphabetic == "Z-A") {
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

router.get("/search/:name", async (req, res) => {
  const { name } = req.params;
  if (name) {
    const resultado = await Country.findOne({
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
