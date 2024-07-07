import { configureStore } from "@reduxjs/toolkit";
import cackeReducer from "./cacke/cackeSlice";
import milkReducer from "./milk/milkSlice";
import userReducer from "./user/userSlice";

const store = configureStore({
  reducer: {
    cacke: cackeReducer,
    milk: milkReducer,
    users: userReducer,
  },
  // devTools:false
});
export default store;
