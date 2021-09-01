import axios from "axios";

export function getCountry() {
  return function (dispatch) {
    return axios.get("http://localhost:3001/api/countries/").then((country) => {
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
      .get("http://localhost:3001/api/countries/" + id)
      .then((country) => {
        dispatch({
          type: "GET_DETAILS",
          payload: country,
        });
      });
  };
}

export function Order(order) {
  return function (dispatch) {
    return axios
      .get("http://localhost:3001/api/countries/order/" + order.value)
      .then((country) => {
        dispatch({
          type: "ORDER",
          payload: country,
        });
      });
  };
}

export function Filter(continent) {
  console.log(continent);
  return function (dispatch) {
    return axios
      .get("http://localhost:3001/api/countries/filter/" + continent)
      .then((country) => {
        dispatch({
          type: "FILTER",
          payload: country,
        });
      });
  };
}
