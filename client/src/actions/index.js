import axios from "axios";

export function getCountry(page) {
  if (page) {
    return function (dispatch) {
      return axios
        .get("http://localhost:3001/api/countries/?page=" + page)
        .then((country) => {
          dispatch({
            type: "GET_COUNTRY",
            payload: country,
          });
        });
    };
  } else if (!page) {
    return function (dispatch) {
      return axios
        .get("http://localhost:3001/api/countries/")
        .then((country) => {
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

export function searchName(name, page) {
  return function (dispatch) {
    return axios
      .get(
        "http://localhost:3001/api/countries/find/name?name=" +
          name +
          "&page=" +
          page
      )
      .then((name) => {
        dispatch({
          type: "SEARCH_NAME",
          payload: name,
        });
      });
  };
}

// export function searchActivity(season) {
//   return function (dispatch) {
//     return axios
//       .get("http://localhost:3001/api/activities/order/" + season)
//       .then((act) => {
//         dispatch({
//           type: "SEARCH_ACTIVITY",
//           payload: act,
//         });
//       });
//   };
// }

export function searchActivity(season) {
  return function (dispatch) {
    return axios.get("http://localhost:3001/api/activities").then((act) => {
      dispatch({
        type: "SEARCH_ACTIVITY",
        payload: [act.data, season],
      });
    });
  };
}

export function postActivity(payload) {
  console.log(payload);
  return async function (dispatch) {
    const response = await axios.post(
      "http://localhost:3001/api/activities/activity",
      payload
    );
    return response;
  };
}
