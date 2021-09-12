import React from "react";
import { Order, Filter, getCountry, searchName } from "../../actions/index";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router";
import styles from "./Pagination.module.css";

function Pagination(props) {
  const pages = useSelector((state) => state.country.count);
  const dispatch = useDispatch();
  let totalPages = [];
  let path = window.location.pathname;
  for (let i = 0; i < pages / 10; i++) {
    totalPages.push(pages[i]);
  }
  var pagina = path.split("/").at(-1);

  function ChangePage(page) {
    if (path.slice(6, 12) === "filter") {
      if (path.slice(15, 23) === "Americas") {
        let type = path.slice(15, 23);
        props.history.push(`/home/filterby/${type}/${page}`);
      }

      if (path.slice(15, 21) === "Africa") {
        let type = path.slice(15, 21);
        props.history.push(`/home/filterby/${type}/${page}`);
      }

      if (path.slice(15, 21) === "Europe") {
        let type = path.slice(15, 21);
        props.history.push(`/home/filterby/${type}/${page}`);
      }

      if (path.slice(15, 22) === "Oceania") {
        let type = path.slice(15, 22);
        props.history.push(`/home/filterby/${type}/${page}`);
      }
      if (path.slice(15, 19) === "Asia") {
        let type = path.slice(15, 19);
        props.history.push(`/home/filterby/${type}/${page}`);
      }
    }
    if (path.slice(6, 11) === "order") {
      if (
        path.slice(14, 17) === "A-Z" ||
        path.slice(14, 17) === "Z-A" ||
        path.slice(14, 17) === "Asc"
      ) {
        let type = path.slice(14, 17);
        props.history.push(`/home/orderby/${type}/${page}`);
      }
      if (path.slice(14, 18) === "Desc") {
        let type = path.slice(14, 18);
        props.history.push(`/home/orderby/${type}/${page}`);
      }
    }
    if (path.length <= 8) {
      props.history.push(`/home/${page}`);
    }
    if (path.slice(6, 12) === "search") {
      let res = path.slice(13);
      dispatch(searchName(res, page));
    }
  }

  return (
    <div className={styles.conteinermain}>
      {totalPages &&
        totalPages.map((page, i) => (
          <button
            key={i}
            onClick={() => ChangePage(i + 1)}
            className={i + 1 == pagina ? styles.active : styles.btn}
          >
            {i + 1}
          </button>
        ))}
    </div>
  );
}
export default withRouter(Pagination);
