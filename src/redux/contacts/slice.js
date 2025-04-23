import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";
import { logout } from "../auth/operations";

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const slice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
    addingSuccess: false,
    deletingSuccess: false,
    selectedContact: null,
    modalDeleteOpen: false,
  },
  reducers: {
    setSelectedContact: (state, action) => {
      state.selectedContact = action.payload;
    },
    setModalDeleteOpen: (state, action) => {
      state.modalDeleteOpen = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, (state) => {
        state.error = null;
        state.deletingSuccess = false;
        state.addingSuccess = false;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.addingSuccess = true;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, (state) => {
        state.error = null;
        state.addingSuccess = false;
        state.deletingSuccess = false;
        state.selectedContact = null;
        state.modalDeleteOpen = false;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload.id
        );
        state.deletingSuccess = true;
      })
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(logout.fulfilled, (state) => {
        state.items = [];
      });
  },
});

export const { setSelectedContact, setModalDeleteOpen } = slice.actions;
export default slice.reducer;
