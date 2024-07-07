import { combineReducers } from "redux";
import cackeReducer from "./cacke/cackeReducer";
import milkReducer from "./milk/milkReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  cacke: cackeReducer,
  milk: milkReducer,
  users:userReducer
});

export default rootReducer;
