const { Router } = require("express");
const router = Router();
const { Country, Activity } = require("../db.js");

router.get("/", async (req, res) => {
  const searchAct = await Activity.findAll();
  if (searchAct.length === 0) {
    return res.status(404).json({ error: "No hay actividades guardadas" });
  } else {
    return res.status(200).json(searchAct);
  }
});

router.get("/order/:season", async (req, res) => {
  const { season } = req.params;

  if (season) {
    const actividad = await Activity.findAll({
      where: {
        season,
      },
    });
    return res.status(200).json(actividad);
  }
  res.status(404).json({ error: "Debe seleccionar una temporada" });
});

router.post("/add", async (req, res) => {
  const { aID, cID } = req.body;
  if ((aID, cID)) {
    const pais = await Country.findByPk(cID);
    return res.json(await pais.addActivity(aID));
  }
  res.json({ error: "Datos Invalidos" });
});

router.post("/activity", async (req, res) => {
  const { name, dificulty, duration, season } = req.body;
  if (name && dificulty && duration && season) {
    const actividad = await Activity.create({
      name,
      dificulty,
      season,
      duration,
    });
    res.status(200).json(actividad);
  } else {
    res.status(400).json({ error: "Faltan parametros" });
  }
});

module.exports = router;
