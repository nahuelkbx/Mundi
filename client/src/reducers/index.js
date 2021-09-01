const initialState = {
  country: [],
  countryDetail: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_COUNTRY":
      return {
        ...state,
        country: action.payload.data,
      };
    case "GET_DETAILS": {
      return {
        ...state,
        countryDetail: action.payload.data,
      };
    }
    case "ORDER": {
      return {
        ...state,
        country: action.payload.data,
      };
    }
    case "FILTER": {
      return {
        ...state,
        country: action.payload.data,
      };
    }
    default:
      return state;
  }
}

export default rootReducer;
