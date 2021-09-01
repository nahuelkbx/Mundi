import React from "react";
import styles from "../Countries/Countries.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getCountry, Filter } from "../../actions/index";
import { useEffect } from "react";
import Country from "../Country/Country.jsx";

function Countries() {
  const country = useSelector((state) => state.country);
  const dispatch = useDispatch();

  let path = window.location.pathname;

  useEffect(() => {
    if (path.slice(1) === "home") {
      dispatch(getCountry());
    } else if (path.slice(6) !== "home") {
      dispatch(Filter(path.slice(6)));
    }
  }, [path]);

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
