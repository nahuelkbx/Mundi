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

  if (population == "Descendente") {
    const asc = await Country.findAll();
    if (asc.length > 1) {
      for (let i = 0; i < asc.length; i++) {
        var resultado = asc.sort(function (a, b) {
          if (a.population > b.population) {
            return 1;
          }
          if (a.population < b.population) {
            return -1;
          }

          return 0;
        });
      }
    }
    res.status(200).json(resultado);
  }
  if (population == "Ascendente") {
    const asc = await Country.findAll();
    if (asc.length > 1) {
      for (let i = 0; i < asc.length; i++) {
        var resultado = asc.sort(function (a, b) {
          if (a.population > b.population) {
            return -1;
          }
          if (a.population < b.population) {
            return 1;
          }

          return 0;
        });
      }
    }
    res.status(200).json(resultado);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  const resultado = await Country.findByPk(id, { include: Activity });
  res.json({ resultado });
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
