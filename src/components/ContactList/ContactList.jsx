import { useSelector } from "react-redux";
import {
  selectLoading,
  selectError,
  selectFilteredContacts,
} from "../../redux/contacts/selectors";
import MoonLoader from "react-spinners/MoonLoader";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

export default function ContactList() {
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <>
      {isLoading ? (
        <MoonLoader className={css.loader} />
      ) : isError ? (
        <ErrorMessage />
      ) : visibleContacts.length === 0 ? (
        <div className={css.title_wrapper}>
          <span className={css.title}>There is no contact...</span>
        </div>
      ) : (
        <ul className={css.list}>
          {visibleContacts.map((contact) => (
            <li className={css.wrapper} key={contact.id}>
              <Contact contact={contact} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
