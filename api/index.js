//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const { Country } = require("./src/db");
const axios = require("axios");

// Syncing all the models at once.
conn.sync({ force: true }).then(async () => {
  const paises = await axios.get("https://restcountries.com/v2/all");
  if (paises.data) {
    for (let i = 0; i < paises.data.length; i++) {
      await Country.create({
        id: paises.data[i].alpha3Code,
        name: paises.data[i].name,
        image: paises.data[i].flags[1],
        continent: paises.data[i].continent,
        capital: paises.data[i].capital,
        subregion: paises.data[i].region,
        area: paises.data[i].area,
        population: paises.data[i].population,
      });
    }
  }
  await Country.bulkCreate(paises);

  server.listen(3001, () => {
    console.log("%s listening at 3001"); // eslint-disable-line no-console
  });
});
