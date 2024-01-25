import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import modalSlice from "./slices/modalSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    modals: modalSlice,
  },
});
export default store;
