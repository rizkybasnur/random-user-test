const initialState = {
  // getCompanyByID: {},
  randomData: "",
  loading: false,
  error: false,
  error_message: "",
};

const randomRed = (state = initialState, action) => {
  switch (action.type) {
    case "RANDOMLIST/START":
      return {
        ...state,
        loading: true,
      };
    case "RANDOMLIST/SUCCESS":
      return {
        ...state,
        randomData: action.payload.randomData,
        loading: false,
      };
    case "RANDOMLIST/ERROR":
      return {
        ...state,
        loading: false,
        error: true,
        error_message: action.payload.errorMessage,
      };
    default:
      return { ...state };
  }
};
export default randomRed;
