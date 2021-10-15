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
  const format = (num) => {
    num = num + "";
    var str = "";
    for (var i = num.length - 1, j = 1; i >= 0; i--, j++) {
      if (j % 3 === 0 && i !== 0) {
        str += num[i] + ".";
        continue;
      }
      str += num[i];
    }
    return str.split("").reverse().join("");
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDetails(id.slice(15)));
  }, [id, dispatch]);

  return (
    <div className={styles.main}>
      <button onClick={() => props.history.goBack()} className={styles.btn}>
        <FontAwesomeIcon icon={faArrowAltCircleLeft} />
      </button>
      {detail.resultado ? (
        <div className={styles.container}>
          <div className={styles.info}>
            <div className={styles.fotocont}>
              <img
                src={`${detail.resultado && detail.resultado.image}`}
                alt="BANDERA"
                className={styles.fotos}
              />
            </div>
            <div className={styles.infocontainer}>
              <h1 className={styles.name}>{detail.resultado.name}</h1>
              <br />
              <label className={styles.area}>
                Area: {format(detail.resultado.area)} km2
              </label>
              <label className={styles.capital}>
                Capital: {detail.resultado.capital}
              </label>
              <label className={styles.continent}>
                Continent: {detail.resultado.continent}
              </label>
              <label className={styles.population}>
                Population:{" "}
                {detail.resultado.population === 0
                  ? detail.resultado.population
                  : format(detail.resultado.population)}
              </label>
              <label className={styles.subregion}>
                Subregion: {detail.resultado.subregion}
              </label>
              <label className={styles.id}>ID: {detail.resultado.id}</label>
            </div>
            {detail.resultado.activities.length > 0 ? (
              detail.resultado.activities.map((c) => (
                <div key={c.id} className={styles.activities}>
                  <h1 className={styles.title}>Activities </h1>
                  <label className={styles.namea}>Name: {c.name}</label>
                  <label className={styles.seasona}>Season: {c.season}</label>
                  <label className={styles.durationa}>
                    Duration: {c.duration}
                  </label>
                  <label className={styles.difficultya}>
                    Difficulty: {c.difficulty}
                  </label>
                  <label className={styles.ida}>ID: {c.id}</label>
                </div>
              ))
            ) : (
              <label className={styles.activitiesNull}>
                This country doesn't have any activity.
              </label>
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default withRouter(CountriesDetails);
