import React from "react";
import styles from "../Countries/Countries.module.css";
import { useSelector, useDispatch } from "react-redux";
import { Order, getCountry, Filter } from "../../actions/index";
import { useEffect } from "react";
import Country from "../Country/Country.jsx";
import Pagination from "../Pagination/Pagination";

function Countries() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  let path = window.location.pathname;

  useEffect(() => {
    if (path.slice(1) === "home") {
      dispatch(getCountry(1));
    }
    if (path.slice(1, 7) === "filter") {
      dispatch(Filter(path.slice(10), 1));
    }
    if (path.slice(1, 6) === "order") {
      dispatch(Order(path.slice(9), 1));
    }
  }, [path]);

  return (
    <div className={styles.contenedor}>
      {state.country.rows &&
        state.country.rows.map((c, i) => (
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
      <Pagination />
    </div>
  );
}

export default Countries;
