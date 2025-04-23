import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contactsOps";
import { selectAddingSuccess } from "../../redux/contactsSlice";
import toast, { Toaster } from "react-hot-toast";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import css from "./App.module.css";
import ContactForm from "../ContactForm/ContactForm";

export default function App() {
  const dispatch = useDispatch();
  const addingSuccess = useSelector(selectAddingSuccess);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    if (addingSuccess) {
      toast.success("Success adding contact");
    }
  }, [addingSuccess]);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
      <Toaster />
    </div>
  );
}
