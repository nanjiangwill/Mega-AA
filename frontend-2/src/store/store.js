import { configureStore } from "@reduxjs/toolkit";
import drawerReducer from "./drawer";

export default configureStore({
  reducer: {
    drawer: drawerReducer,
  },
});
