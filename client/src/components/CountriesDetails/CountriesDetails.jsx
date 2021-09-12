import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../../actions/index";
import { useEffect } from "react";
import { withRouter } from "react-router-dom";
import styles from "./CountriesDetails.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";

function CountriesDetails(props) {
  let id = window.location.pathname;
  const detail = useSelector((state) => state.countryDetail);
  console.log(detail.resultado);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDetails(id.slice(15)));
  }, []);

  return (
    <div className={styles.main}>
      {detail.resultado ? (
        <div className={styles.container}>
          <button onClick={() => props.history.goBack()} className={styles.btn}>
            <FontAwesomeIcon icon={faArrowAltCircleLeft} />
          </button>
          <div className={styles.info}>
            <div className={styles.fotocont}>
              <img
                src={`${detail.resultado && detail.resultado.image}`}
                alt="BANDERA"
                className={styles.fotos}
              />
            </div>
            <h1 className={styles.name}>{detail.resultado.name}</h1>
            <br />
            <label className={styles.area}>Area: {detail.resultado.area}</label>
            <label className={styles.capital}>
              Capital: {detail.resultado.capital}
            </label>
            <label className={styles.continent}>
              Continent: {detail.resultado.continent}
            </label>
            <label className={styles.population}>
              Population: {detail.resultado.population}
            </label>
            <label className={styles.subregion}>
              Subregion: {detail.resultado.subregion}
            </label>
            <label className={styles.id}>ID: {detail.resultado.id}</label>
            {detail.resultado.activities.length > 0
              ? detail.resultado.activities.map((c) => (
                  <div key={c.id} className={styles.activities}>
                    <h1>Activities </h1>
                    <label>Name: {c.name}</label>
                    <label>Season: {c.season}</label>
                    <label>ID: {c.id}</label>
                    <label>Duration: {c.duration}</label>
                    <label>Difficulty: {c.difficulty}</label>
                  </div>
                ))
              : "This country doesn't have any activity."}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default withRouter(CountriesDetails);
