import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/selectors";

export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;
export const selectAddingSuccess = (state) => state.contacts.addingSuccess;
export const selectDeletingSuccess = (state) => state.contacts.deletingSuccess;
export const selectSelectedContact = (state) => state.contacts.selectedContact;
export const selectModalDeleteOpen = (state) => state.contacts.modalDeleteOpen;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filterName) => {
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(filterName.toLowerCase()) ||
        contact.number.includes(filterName)
    );
  }
);
