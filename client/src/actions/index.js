import axios from "axios";
const { URL } = process.env;
export function getCountry(page) {
  if (page) {
    return function (dispatch) {
      return axios.get(`${URL}/api/countries/?page=` + page).then((country) => {
        dispatch({
          type: "GET_COUNTRY",
          payload: country,
        });
      });
    };
  } else if (!page) {
    return function (dispatch) {
      return axios.get(`${URL}/api/countries/`).then((country) => {
        dispatch({
          type: "GET_COUNTRY",
          payload: country,
        });
      });
    };
  }
}

export function getDetails(id) {
  return function (dispatch) {
    return axios.get(`${URL}api/countries/searchby/` + id).then((country) => {
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
      .get(`${URL}api/countries/order/` + order + "/" + page)
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
      .get(`${URL}/api/countries/filter/` + continent + "/" + page)
      .then((country) => {
        dispatch({
          type: "FILTER",
          payload: country,
        });
      });
  };
}

export function searchName(name, page) {
  return function (dispatch) {
    return axios
      .get(`${URL}/api/countries/find/name?name=` + name + "&page=" + page)
      .then((name) => {
        dispatch({
          type: "SEARCH_NAME",
          payload: name,
        });
      });
  };
}

export function searchActivity(season) {
  return function (dispatch) {
    return axios.get(`${URL}/api/activities`).then((act) => {
      dispatch({
        type: "SEARCH_ACTIVITY",
        payload: [act.data, season],
      });
    });
  };
}

export function postActivity(payload) {
  return async function (dispatch) {
    const response = await axios.post(
      `${URL}/api/activities/activity`,
      payload
    );
    return response;
  };
}
