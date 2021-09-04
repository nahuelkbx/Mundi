import React from "react";
import { Order, Filter, getCountry, searchName } from "../../actions/index";
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
    if (path.slice(6, 12) === "filter") {
      let res = path.slice(15);
      dispatch(Filter(res, page));
    }
    if (path.slice(6, 11) === "order") {
      let res = path.slice(14);
      dispatch(Order(res, page));
    }
    if (path.slice(1) === "home") {
      dispatch(getCountry(page));
    }
    if (path.slice(6, 12) === "search") {
      let res = path.slice(13);
      dispatch(searchName(res, page));
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
