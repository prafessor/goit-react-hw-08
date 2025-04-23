import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  selectModalDeleteOpen,
  selectSelectedContact,
} from "../../redux/contacts/selectors";
import { setModalDeleteOpen } from "../../redux/contacts/slice";
import { deleteContact } from "../../redux/contacts/operations";
import css from "./ModalDelete.module.css";

export default function ModalDelete() {
  const dispatch = useDispatch();
  const contact = useSelector(selectSelectedContact);
  const modalOpen = useSelector(selectModalDeleteOpen);

  const handleModalClose = () => dispatch(setModalDeleteOpen(false));
  const handleDeleteClick = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={modalOpen}
      onClose={handleModalClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Box className={css.modal}>
        <p>Are you sure you want to delete {contact && contact.name}?</p>
        <div className={css.btn_wrapper}>
          <button className={css.btn} onClick={handleModalClose}>
            Cancel
          </button>
          <button className={css.btn} onClick={handleDeleteClick}>
            Yes
          </button>
        </div>
      </Box>
    </Modal>
  );
}
