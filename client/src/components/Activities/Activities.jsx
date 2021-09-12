import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchActivity } from "../../actions/index";
import styles from "./Activities.module.css";
import Activity from "../Activity/Activity";

function Activities() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  let path = window.location.pathname;

  useEffect(() => {
    if (path.slice(6, 14) === "activity") {
      dispatch(searchActivity(path.slice(15)));
    }
  }, [path]);

  return (
    <div className={styles.container}>
      <div className={styles.cardcontainer}>
        {state.activities.length >= 1 ? (
          state.activities.map((c) => (
            <Activity
              key={c.name}
              id={c.name}
              name={c.name}
              duration={c.duration}
              season={c.season}
              difficulty={c.difficulty}
            />
          ))
        ) : (
          <h1>There isnt activities here...</h1>
        )}
      </div>
    </div>
  );
}

export default Activities;
