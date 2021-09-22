import React from "react";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithubSquare,
  faInstagramSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className={styles.footermain}>
      <a
        href="https://github.com/nahuelkbx"
        className={styles.github}
        target="_BLANK"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faGithubSquare} />
      </a>
      <a
        href="https://www.linkedin.com/in/nahuelmonserrat/"
        className={styles.linkedin}
        target="_BLANK"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a
        href="https://www.linkedin.com/in/nahuelmonserrat/"
        className={styles.name}
        target="_BLANK"
        rel="noreferrer"
      >
        <h4>Nahuel Monserrat</h4>
      </a>
      <a
        href="https://www.instagram.com/"
        className={styles.ig}
        target="_BLANK"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faInstagramSquare} />
      </a>
      <a
        href="https://twitter.com/home"
        className={styles.twitter}
        target="_BLANK"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faTwitterSquare} />
      </a>
    </div>
  );
}

export default Footer;
