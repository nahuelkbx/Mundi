import React from "react";
import { useDispatch } from "react-redux";
import { Order } from "../../actions/index";
import { withRouter } from "react-router-dom";
import { Filter } from "../../actions/index";
import { useState, useEffect } from "react";

function Nav(props) {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    value: "A-Z",
  });

  function handleChange(e) {
    setState({
      value: e.target.value,
    });
    props.history.push("/home");
  }

  function Filtrado(e) {
    if (e.target.value === "home") {
      return props.history.push(`/${e.target.value}`);
    }
    props.history.push(`/home/${e.target.value}`);
    // let history = useHistory();
    // history.push(`/filterby/${e.target.value}`)
  }

  useEffect(() => {
    dispatch(Order(state));
  }, [state.value]);
  return (
    <div>
      <select name="selectBox" onChange={(e) => handleChange(e)}>
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
