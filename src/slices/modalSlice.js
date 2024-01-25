import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  editModalOpen: false,
  confirmModalOpen: false,
};
const modalSlice = createSlice({
  name: "modalSlice",
  initialState,
  reducers: {
    openEditModal: (state) => {
      state.editModalOpen = true;
    },
    closeEditModal: (state) => {
      state.editModalOpen = false;
    },
    openConfirmModal: (state) => {
      state.confirmModalOpen = true;
    },
    closeConfirmModal: (state) => {
      state.editModalOpen = false;
    },
    closeAllModal: (state) => {
      state.editModalOpen = false;
      state.confirmModalOpen = false;
    },
  },
});

export default modalSlice.reducer;
export const {
  openEditModal,
  closeEditModal,
  openConfirmModal,
  closeConfirmModal,
  closeAllModal,
} = modalSlice.actions;
