import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { IoMdContact } from "react-icons/io";
import css from "./ModalWindow.module.css";

export default function ModalWindow({ isOpen, onOpen, onClose, children }) {
  return (
    <div>
      <button className={css.btn_add} onClick={onOpen}>
        <IoMdContact className={css.icon} size={24} />
        Add contact
      </button>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isOpen}
        onClose={onClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Box className={css.modal}>{children}</Box>
      </Modal>
    </div>
  );
}
