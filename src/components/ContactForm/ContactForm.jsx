import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { BsPersonFill, BsTelephoneFill } from "react-icons/bs";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId, useRef } from "react";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

// validation schema
const addSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be min 3 sumbols")
    .max(50, "Name must be max 50 sumbols")
    .required("Field name is required"),
  number: Yup.string()
    .matches(
      /(?:([+]\d{1,4})[-.\s]?)?(?:[(](\d{1,3})[)][-.\s]?)?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})/,
      "Number is invalid"
    )
    .required("Field number is required"),
});

// Adding new contact function
export default function ContactForm({ onClose }) {
  const dispatch = useDispatch();
  const inputNameRef = useRef(null);
  const inputNumberRef = useRef(null);

  const formId = useId();

  const handleFormSubmit = (values, actions) => {
    dispatch(addContact(values));

    inputNameRef.current.blur();
    inputNumberRef.current.blur();
    actions.resetForm();
    onClose();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={addSchema}
      onSubmit={handleFormSubmit}
    >
      <Form className={css.wrapper}>
        <p className={css.title}>Add contact</p>
        <div className={css.input_wrapper}>
          <BsPersonFill className={css.icon} />
          <Field
            className={css.input}
            type="text"
            name="name"
            id={formId + "-name"}
            innerRef={inputNameRef}
            required
          />
          <label className={css.label} htmlFor={formId + "-name"}>
            Name
          </label>
          <span className={css.err}>
            <ErrorMessage className={css.error} name="name" />
          </span>
        </div>

        <div className={css.input_wrapper}>
          <BsTelephoneFill className={css.icon} />
          <Field
            className={css.input}
            type="tel"
            name="number"
            id={formId + "-number"}
            innerRef={inputNumberRef}
            required
          />
          <label className={css.label} htmlFor={formId + "-number"}>
            Number
          </label>
          <span className={css.err}>
            <ErrorMessage className={css.error} name="number" />
          </span>
        </div>

        <button className={css.btn_submit} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
