import { randomSrvc } from "../../service/service";

export const randomStart = () => {
  return {
    type: "RANDOMLIST/START",
  };
};

export const randomSuccess = (randomData) => {
  return {
    type: "RANDOMLIST/SUCCESS",
    payload: { randomData },
  };
};

export const randomError = (errorMessage) => {
  return {
    type: "RANDOMLIST/ERROR",
    payload: { errorMessage },
  };
};

export const randomAsync = () => {
  return (dispatch) => {
    // dispatch(randomStart());
    randomSrvc()
      .then((response) => {
        console.log(response);
        dispatch(randomSuccess(response));
      })
      .catch((error) => {
        console.log(error.message);
        dispatch(randomError(error.message));
      });
  };
};
