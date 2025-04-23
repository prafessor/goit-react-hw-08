import { useDispatch } from "react-redux";
import {
  setSelectedContact,
  setModalDeleteOpen,
} from "../../redux/contacts/slice";
import { BsPersonFill, BsTelephoneFill } from "react-icons/bs";
import css from "./Contact.module.css";

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  const handleDeleteBtnClick = () => {
    dispatch(setSelectedContact(contact));
    dispatch(setModalDeleteOpen(true));
  };

  return (
    <>
      <div className={css.text_container}>
        <span className={css.item}>
          <BsPersonFill className={css.icon} />
          {contact.name}
        </span>

        <span className={css.item}>
          <BsTelephoneFill className={css.icon} />
          {contact.number}
        </span>
      </div>

      <button className={css.btn} onClick={handleDeleteBtnClick}>
        Delete
      </button>
    </>
  );
}
