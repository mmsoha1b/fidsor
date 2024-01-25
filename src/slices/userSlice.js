import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  age: 0,
  weight: 0,
};
const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    updateVals: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export default userSlice.reducer;
export const { updateVals } = userSlice.actions;
