const initialState = {
  result: {},
  error: null,
};
const resultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_RESULT":
      return {
        result: {...action.payload },
        error: action.payload.error,
      };

    case "SET_ERROR":
      return {
        result: {},
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default resultsReducer;
