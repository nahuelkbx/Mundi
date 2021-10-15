import React from "react";
import styles from "../Landing/Landing.module.css";

import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className={styles.principal}>
      <Link to="/home/1">
        <span>
          <a href="#"></a>
        </span>
      </Link>
    </div>
  );
}
