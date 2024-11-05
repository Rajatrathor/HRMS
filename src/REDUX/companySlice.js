import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebarVisible: true,
  formData: [],
};
const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.sidebarVisible = !state.sidebarVisible;
    },
  },
});

export const { toggleSidebar } = companySlice.actions;
export default companySlice.reducer;
