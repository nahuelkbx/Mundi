import React from "react";
import { useDispatch } from "react-redux";
import { Order } from "../../actions/index";
// import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
function Nav() {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    value: "A-Z",
  });
  function handleChange(e) {
    setState({
      value: e.target.value,
    });
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
    </div>
  );
}

export default Nav;
