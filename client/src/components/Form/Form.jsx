import React from "react";
import { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { getCountry } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { postActivity } from "../../actions/index";

function Form(props) {
  const dispatch = useDispatch();
  const country = useSelector((state) => state.country);

  const [state, setState] = useState({
    name: "",
    difficulty: "",
    duration: 0,
    season: "",
    countryID: [],
  });

  useEffect(() => {
    dispatch(getCountry());
  }, []);

  function onChange(e) {
    setState({
      ...state,
      name: e.target.value,
    });
  }

  function onCheckSeason(e) {
    if (e.target.checked)
      setState({
        ...state,
        season: e.target.value,
      });
  }

  function onCheckDifficulty(e) {
    setState({
      ...state,
      difficulty: e.target.value,
    });
  }

  function onSelect(e) {
    e.preventDefault();
    setState({
      ...state,
      countryID: [...state.countryID, e.target.value],
    });
  }

  function onDuration(e) {
    e.preventDefault();
    setState({
      ...state,
      duration: e.target.value,
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    dispatch(postActivity(state));
    alert("Success!");
    setState({
      name: "",
      difficulty: "",
      duration: 0,
      season: "",
      countryID: [],
    });
    props.history.push("/home");
  }
  return (
    <div>
      <br></br>
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          type="text"
          name="actividad"
          placeholder="Add name"
          onChange={(e) => onChange(e)}
        />
        <br />
        <input
          type="radio"
          name="season"
          value="summer"
          onChange={(e) => onCheckSeason(e)}
        />
        Summer <br />
        <input
          type="radio"
          name="season"
          value="spring"
          onChange={(e) => onCheckSeason(e)}
        />
        Spring <br />
        <input
          type="radio"
          name="season"
          value="winter"
          onChange={(e) => onCheckSeason(e)}
        />
        Winter <br />
        <input
          type="radio"
          name="season"
          value="fall"
          onChange={(e) => onCheckSeason(e)}
        />
        Fall <br />
        <select onChange={(e) => onCheckDifficulty(e)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <br />
        <input
          type="range"
          min={0}
          max={120}
          step={10}
          name="duration"
          value={state.duration}
          onChange={(e) => onDuration(e)}
        />
        <br />
        <select onChange={(e) => onSelect(e)}>
          {country.rows &&
            country.rows.map((c) => (
              <option value={c.id} key={c.id}>
                {c.name}
              </option>
            ))}
        </select>
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default withRouter(Form);
