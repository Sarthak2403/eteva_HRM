import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "../slice/home";

const Store = configureStore({
  reducer: { home: homeReducer },
});
export default Store;
