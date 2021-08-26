import { combineReducers } from "redux";
import randomRed from "./randomRed";

const allRed = combineReducers({
  randomred: randomRed,
});

export default allRed;
