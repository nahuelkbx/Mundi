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

export function filterBy() {}
