import axios from "axios";

export function getCountry(page) {
  return function (dispatch) {
    return axios
      .get("http://localhost:3001/api/countries/" + page)
      .then((country) => {
        dispatch({
          type: "GET_COUNTRY",
          payload: country,
        });
      });
  };
}

export function getDetails(id) {
  return function (dispatch) {
    return axios
      .get("http://localhost:3001/api/countries/searchby/" + id)
      .then((country) => {
        dispatch({
          type: "GET_DETAILS",
          payload: country,
        });
      });
  };
}

export function Order(order, page) {
  return function (dispatch) {
    return axios
      .get("http://localhost:3001/api/countries/order/" + order + "/" + page)
      .then((country) => {
        dispatch({
          type: "ORDER",
          payload: country,
        });
      });
  };
}

export function Filter(continent, page) {
  return function (dispatch) {
    return axios
      .get(
        "http://localhost:3001/api/countries/filter/" + continent + "/" + page
      )
      .then((country) => {
        dispatch({
          type: "FILTER",
          payload: country,
        });
      });
  };
}
