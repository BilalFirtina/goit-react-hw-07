import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "https://689a1f42fed141b96ba1f06d.mockapi.io/contacts";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

export const getAllContacts = createAsyncThunk(
  "contacts/getAllContacts",
  async () => {
    const response = await axios.get(baseUrl);
    console.log(response.data);
    return response.data;
  }
);

const contactsOps = createSlice({
  name: "contactsOps",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllContacts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(getAllContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default contactsOps.reducer;
