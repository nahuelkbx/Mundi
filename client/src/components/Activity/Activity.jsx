import React from "react";
import styles from "./Activity.module.css";
function Activity({ name, duration, season, difficulty, id }) {
  return (
    <div className={styles.card}>
      <h1> {name}</h1>
      <label>Duration: {duration}</label>
      <label>Season: {season}</label>
      <label>Difficulty: {difficulty}</label>
      <label>ID: {id}</label>
    </div>
  );
}

export default Activity;
