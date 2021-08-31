import React from "react";
import CountriesDetails from "../CountriesDetails/CountriesDetails";
import styles from "../Country/Country.module.css";
import { Link } from "react-router-dom";
function Country({
  id,
  name,
  img,
  continent,
  capital,
  subregion,
  area,
  population,
}) {
  return (
    <div className={styles.contenedor}>
      <ul>
        <li>
          <Link to={`/countryDetail/${id}`}>{name}</Link>
          <img src={`${img}`} alt="" className={styles.fotos} />
        </li>
      </ul>
    </div>
  );
}

export default Country;
