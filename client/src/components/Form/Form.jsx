import React from "react";
import { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { getCountry } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { postActivity } from "../../actions/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faSun,
  faCloudSun,
  faSnowflake,
} from "@fortawesome/free-solid-svg-icons";
import { faCanadianMapleLeaf } from "@fortawesome/free-brands-svg-icons";
import styles from "./Form.module.css";

function Form(props) {
  const dispatch = useDispatch();
  const country = useSelector((state) => state.country);

  const [state, setState] = useState({
    name: "",
    difficulty: "",
    duration: 10,
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
    if (
      state.difficulty !== "" &&
      state.season !== "" &&
      state.countryID.length > 0
    ) {
      dispatch(postActivity(state));
      alert("Success!");
      setState({
        name: "",
        difficulty: "",
        duration: 0,
        season: "",
        countryID: [],
      });
      props.history.push("/home/1");
    } else {
      alert("All forms required");
    }
  }

  return (
    <div className={styles.main}>
      <button onClick={() => props.history.goBack()} className={styles.back}>
        <FontAwesomeIcon icon={faArrowAltCircleLeft} />
      </button>
      <div className={styles.container}>
        <br></br>
        <form onSubmit={(e) => onSubmit(e)} className={styles.form}>
          <div className={styles.formname}>
            <input
              type="text"
              name="actividad"
              placeholder="Add name..."
              onChange={(e) => onChange(e)}
              required
              className={styles.name}
            />
          </div>
          <div className={styles.season}>
            <input
              type="radio"
              name="season"
              value="summer"
              onChange={(e) => onCheckSeason(e)}
              className={styles.summer}
              required
            />
            <FontAwesomeIcon icon={faSun} className={styles.summericon} />
            Summer
            <input
              type="radio"
              name="season"
              value="spring"
              onChange={(e) => onCheckSeason(e)}
              className={styles.spring}
            />
            <FontAwesomeIcon icon={faCloudSun} className={styles.springicon} />
            Spring
            <input
              type="radio"
              name="season"
              value="winter"
              onChange={(e) => onCheckSeason(e)}
              className={styles.winter}
            />
            <FontAwesomeIcon icon={faSnowflake} className={styles.wintericon} />
            Winter
            <input
              type="radio"
              name="season"
              value="fall"
              onChange={(e) => onCheckSeason(e)}
              className={styles.fall}
            />
            <FontAwesomeIcon
              icon={faCanadianMapleLeaf}
              className={styles.fallicon}
            />
            Fall
          </div>
          <div>
            <select
              onChange={(e) => onCheckDifficulty(e)}
              className={styles.difficulty}
              required
            >
              <option value="">Add Difficulty</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <br />
          <div>
            <input
              type="range"
              min={10}
              max={120}
              step={10}
              name="duration"
              value={state.duration}
              onChange={(e) => onDuration(e)}
              className={styles.duration}
              required
            />
            <br />
            <label>{state.duration} minutes...</label>
            <br />
            <br />
          </div>
          <div>
            <select
              onChange={(e) => onSelect(e)}
              className={styles.country}
              required
            >
              <option value="">Add Country</option>
              {country.rows &&
                country.rows.map((c) => (
                  <option value={c.id} key={c.id}>
                    {c.name}
                  </option>
                ))}
            </select>
          </div>
          <br />
          <div>
            {state.countryID.length >= 1 ? (
              state.countryID.map((c) => <label key={c}>{c + " "}</label>)
            ) : (
              <label className={styles.label}>
                There is not selected country yet
              </label>
            )}
          </div>
          <br />
          <input type="submit" className={styles.btn} />
        </form>
      </div>
    </div>
  );
}

export default withRouter(Form);
