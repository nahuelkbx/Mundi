import React from "react";
import { withRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { searchName } from "../../actions";

function Nav(props) {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    title: "",
  });

  function Ordenado(e) {
    if (e.target.value === "A-Z") {
      return props.history.push(`/orderby/${e.target.value}`);
    }
    if (e.target.value === "Z-A") {
      return props.history.push(`/orderby/${e.target.value}`);
    }
    if (e.target.value === "Asc") {
      return props.history.push(`/orderby/${e.target.value}`);
    }
    if (e.target.value === "Desc") {
      return props.history.push(`/orderby/${e.target.value}`);
    }
  }

  function Filtrado(e) {
    if (e.target.value === "home") {
      return props.history.push(`/${e.target.value}`);
    }
    props.history.push(`/filterby/${e.target.value}`);
  }

  function handleOnChange(e) {
    e.preventDefault();
    props.history.push(`/search/${state.title}`);
    dispatch(searchName(state.title, 1));
  }

  return (
    <div>
      <form action="" onSubmit={(e) => handleOnChange(e)}>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setState({ title: e.target.value })}
        />
        <input type="submit" value="Search" />
      </form>

      <select name="selectBox" onChange={(e) => Ordenado(e)}>
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
        <option value="Asc">PopulationUP</option>
        <option value="Desc">PopulationDOWN</option>
      </select>

      <select name="selectBox2" onChange={(e) => Filtrado(e)}>
        <option value="home">All</option>
        <option value="Americas">Americas</option>
        <option value="Africa">Africa</option>
        <option value="Oceania">Oceania</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europa</option>
      </select>

      <button onClick={() => props.history.push("/createactivity")}>
        Add Activity
      </button>
    </div>
  );
}

export default withRouter(Nav);
