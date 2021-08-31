import React from "react";
import styles from "../Countries/Countries.module.css";
import { useSelector } from "react-redux";
import Country from "../Country/Country.jsx";

function Countries() {
  const country = useSelector((state) => state.country);

  return (
    <div className={styles.contenedor}>
      {country &&
        country.map((c, i) => (
          <Country
            key={c.id}
            id={c.id}
            name={c.name}
            img={c.image}
            continent={c.continent}
            capital={c.capital}
            subregion={c.subregion}
            area={c.area}
            population={c.population}
          />
        ))}
    </div>
  );
}

export default Countries;
