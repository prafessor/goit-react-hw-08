import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import toast, { Toaster } from "react-hot-toast";
import {
  selectAddingSuccess,
  selectDeletingSuccess,
} from "../../redux/contacts/selectors";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import ModalWindow from "../../components/ModalWindow/ModalWindow";

import css from "./ContactsPage.module.css";
import ModalDelete from "../../components/ModalDelete/ModalDelete";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const addingSuccess = useSelector(selectAddingSuccess);
  const deletingSuccess = useSelector(selectDeletingSuccess);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    if (addingSuccess) {
      toast.success("Success adding contact");
    } else if (deletingSuccess) {
      toast.success("Success deleting contact");
    }
  }, [addingSuccess, deletingSuccess]);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <section className={css.section}>
      <ModalWindow isOpen={open} onOpen={handleOpen} onClose={handleClose}>
        <ContactForm onClose={handleClose} />
      </ModalWindow>
      <SearchBox />
      <ContactList />
      <ModalDelete />
      <Toaster />
    </section>
  );
}
