import React from "react";
import { withRouter } from "react-router-dom";
import styles from "../Countries/Countries.module.css";
import { useSelector, useDispatch } from "react-redux";
import { Order, getCountry, Filter } from "../../actions/index";
import { useEffect } from "react";
import Country from "../Country/Country.jsx";
import Pagination from "../Pagination/Pagination";

function Countries(props) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  let path = window.location.pathname;

  function Ordenado(e) {
    if (e.target.value === "A-Z") {
      return props.history.push(`/home/orderby/${e.target.value}/1`);
    } else if (e.target.value === "Z-A") {
      return props.history.push(`/home/orderby/${e.target.value}/1`);
    } else if (e.target.value === "Asc") {
      return props.history.push(`/home/orderby/${e.target.value}/1`);
    } else if (e.target.value === "Desc") {
      return props.history.push(`/home/orderby/${e.target.value}/1`);
    }
  }

  function Filtrado(e) {
    if (e.target.value === "home") {
      return props.history.push(`/${e.target.value}/1`);
    }
    props.history.push(`/home/filterby/${e.target.value}/1`);
  }

  function searchActivity(e) {
    props.history.push(`/home/activity/${e.target.value}`);
  }

  useEffect(() => {
    if (path.length <= 8) {
      let page = path.slice(6);
      dispatch(getCountry(page));
    } else if (path.slice(6, 12) === "filter") {
      if (path.slice(15, 23) === "Americas") {
        let page = path.slice(24);
        let type = path.slice(15, 23);
        dispatch(Filter(type, page));
      } else if (path.slice(15, 21) === "Africa") {
        let page = path.slice(22);
        let type = path.slice(15, 21);
        dispatch(Filter(type, page));
      } else if (path.slice(15, 21) === "Europe") {
        let page = path.slice(22);
        let type = path.slice(15, 21);
        dispatch(Filter(type, page));
      } else if (path.slice(15, 22) === "Oceania") {
        let page = path.slice(23);
        let type = path.slice(15, 22);
        dispatch(Filter(type, page));
      } else if (path.slice(15, 19) === "Asia") {
        let page = path.slice(20);
        let type = path.slice(15, 19);
        dispatch(Filter(type, page));
      }
    } else if (path.slice(6, 11) === "order") {
      if (
        path.slice(14, 17) === "A-Z" ||
        path.slice(14, 17) === "Z-A" ||
        path.slice(14, 17) === "Asc"
      ) {
        let page = path.slice(18);
        let type = path.slice(14, 17);
        dispatch(Order(type, page));
      } else if (path.slice(14, 18) === "Desc") {
        let page = path.slice(19);
        let type = path.slice(14, 18);
        dispatch(Order(type, page));
      }
    }
  }, [path]);
  return (
    <div className={styles.contenedor}>
      <div className={styles.formConteiner}>
        <select
          name="selectBox"
          onChange={(e) => Ordenado(e)}
          className={styles.order}
        >
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
          <option value="Asc">PopulationUP</option>
          <option value="Desc">PopulationDOWN</option>
        </select>
        <select
          name="selectBox2"
          onChange={(e) => Filtrado(e)}
          className={styles.filter}
        >
          <option value="home">All</option>
          <option value="Americas">Americas</option>
          <option value="Africa">Africa</option>
          <option value="Oceania">Oceania</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
        </select>
        <select
          name="selectBox3"
          onChange={(e) => searchActivity(e)}
          className={styles.temporada}
        >
          <option value="">Find Activity</option>
          <option value="summer">Summer</option>
          <option value="winter">Winter</option>
          <option value="spring">Spring</option>
          <option value="fall">Fall</option>
        </select>
      </div>
      <div className={styles.conteinercards}>
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
      </div>
      <Pagination />
    </div>
  );
}

export default withRouter(Countries);
