import React from "react";
import { withRouter, Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchName } from "../../actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAmericas, faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "./Nav.module.css";

function Nav(props) {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    title: "",
  });

  function Ordenado(e) {
    if (e.target.value === "A-Z") {
      return props.history.push(`/home/orderby/${e.target.value}/1`);
    }
    if (e.target.value === "Z-A") {
      return props.history.push(`/home/orderby/${e.target.value}/1`);
    }
    if (e.target.value === "Asc") {
      return props.history.push(`/home/orderby/${e.target.value}/1`);
    }
    if (e.target.value === "Desc") {
      return props.history.push(`/home/orderby/${e.target.value}/1`);
    }
  }

  function Filtrado(e) {
    if (e.target.value === "home") {
      return props.history.push(`/${e.target.value}/1`);
    }
    props.history.push(`/home/filterby/${e.target.value}/1`);
  }

  function handleOnChange(e) {
    e.preventDefault();
    props.history.push(`/home/search/${state.title}`);
    dispatch(searchName(state.title, 1));
  }

  function searchActivity(e) {
    props.history.push(`/home/activity/${e.target.value}/1`);
  }

  return (
    <div className={styles.main}>
      <Link to="/home/1">
        <a className={styles.logo}>
          <FontAwesomeIcon icon={faGlobeAmericas} />
        </a>
      </Link>

      <form
        action=""
        onSubmit={(e) => handleOnChange(e)}
        className={styles.form}
      >
        <input
          type="text"
          placeholder="Find countries..."
          onChange={(e) => setState({ title: e.target.value })}
          className={styles.inputsearch}
        />
        <button className={styles.search}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>

      <select
        name="selectBox3"
        onChange={(e) => searchActivity(e)}
        className={styles.temporada}
      >
        <option value="summer">Summer</option>
        <option value="winter">Winter</option>
        <option value="spring">Spring</option>
        <option value="fall">Fall</option>
      </select>

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

      <button onClick={() => props.history.push("/createactivity")}>
        Add Activity
      </button>
    </div>
  );
}

export default withRouter(Nav);
