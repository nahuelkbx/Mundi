import React from "react";
import { withRouter } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchName } from "../../actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobeAmericas,
  faSearch,
  faPlusSquare,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Nav.module.css";

function Nav(props) {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    title: "",
  });

  function handleOnChange(e) {
    e.preventDefault();
    if (!state.title) {
      props.history.push(`/home/1`);
    } else {
      props.history.push(`/home/search/${state.title}`);
      dispatch(searchName(state.title, 1));
    }
  }

  return (
    <div className={styles.main}>
      <a href="/home/1" className={styles.logo}>
        <FontAwesomeIcon icon={faGlobeAmericas} />
      </a>

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

      <a href="/createactivity" className={styles.actividad}>
        Add activity
        <FontAwesomeIcon icon={faPlusSquare} className={styles.btn} />
      </a>
    </div>
  );
}

export default withRouter(Nav);
