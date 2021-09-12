import React from "react";
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
      <Link to={`/countryDetail/${id}`}>
        <div className={styles.card}>
          <div className={styles.containerfoto}>
            <img src={`${img}`} alt="" className={styles.foto} />
          </div>
          <span className={styles.name}>{name}</span>
          <span className={styles.continente}>Continent: {continent}</span>
          <span className={styles.capital}>Capital: {capital}</span>
        </div>
      </Link>
    </div>
  );
}

export default Country;
