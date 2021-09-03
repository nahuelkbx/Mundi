import React from "react";
import { Order, Filter, getCountry } from "../../actions/index";
import { useSelector, useDispatch } from "react-redux";
export default function Pagination() {
  const pages = useSelector((state) => state.country.count);
  const dispatch = useDispatch();
  let totalPages = [];
  let path = window.location.pathname;
  for (let i = 0; i < pages / 10; i++) {
    totalPages.push(pages[i]);
  }

  function ChangePage(page) {
    if (path.slice(1, 7) === "filter") {
      let res = path.slice(10);
      dispatch(Filter(res, page));
    }
    if (path.slice(1, 6) === "order") {
      let res = path.slice(9);
      dispatch(Order(res, page));
    }
    if (path.slice(1) === "home") {
      dispatch(getCountry(page));
    }
  }

  return (
    <div>
      {totalPages &&
        totalPages.map((page, i) => (
          <button key={i} onClick={() => ChangePage(i + 1)}>
            {i + 1}
          </button>
        ))}
    </div>
  );
}
