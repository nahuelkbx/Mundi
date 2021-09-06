const initialState = {
  country: [],
  countryDetail: [],
  activities: [],
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
    case "SEARCH_NAME": {
      return {
        ...state,
        country: action.payload.data,
      };
    }
    case "SEARCH_ACTIVITY": {
      return {
        ...state,
        activities: action.payload[0].filter(
          (c) => c.season === action.payload[1]
        ),
      };
    }
    case "POST_ACTIVITY": {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
}

export default rootReducer;
