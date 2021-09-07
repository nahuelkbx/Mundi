import React from "react";
import styles from "../Landing/Landing.module.css";
import fondo from "./fondo2.jpg";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className={styles.principal}>
      <Link to="/home/1">
        <button className={styles.btn}> Countries </button>
      </Link>
    </div>
  );
}
