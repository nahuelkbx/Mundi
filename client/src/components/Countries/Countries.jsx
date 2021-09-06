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
    if (path.length <= 8) {
      let page = path.slice(6);
      dispatch(getCountry(page));
    }
    if (path.slice(6, 12) === "filter") {
      if (path.slice(15, 23) === "Americas") {
        let page = path.slice(24);
        let type = path.slice(15, 23);
        dispatch(Filter(type, page));
      }

      if (path.slice(15, 21) === "Africa") {
        let page = path.slice(22);
        let type = path.slice(15, 21);
        dispatch(Filter(type, page));
      }

      if (path.slice(15, 21) === "Europe") {
        let page = path.slice(22);
        let type = path.slice(15, 21);
        dispatch(Filter(type, page));
      }

      if (path.slice(15, 22) === "Oceania") {
        let page = path.slice(23);
        let type = path.slice(15, 22);
        dispatch(Filter(type, page));
      }
      if (path.slice(15, 19) === "Asia") {
        let page = path.slice(20);
        let type = path.slice(15, 19);
        dispatch(Filter(type, page));
      }
    }
    if (path.slice(6, 11) === "order") {
      if (
        path.slice(14, 17) === "A-Z" ||
        path.slice(14, 17) === "Z-A" ||
        path.slice(14, 17) === "Asc"
      ) {
        let page = path.slice(18);
        let type = path.slice(14, 17);
        dispatch(Order(type, page));
      }
      if (path.slice(14, 18) === "Desc") {
        let page = path.slice(19);
        let type = path.slice(14, 18);
        dispatch(Order(type, page));
      }
    }
  }, [path]);
  return (
    <div className={styles.contenedor}>
      {state.country.rows &&
        state.country.rows.map((c) => (
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
