import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

// validation schema
const addSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be min 3 sumbols")
    .max(50, "Name must be max 50 sumbols")
    .required("Field name is required"),
  phone: Yup.string()
    .matches(
      /(?:([+]\d{1,4})[-.\s]?)?(?:[(](\d{1,3})[)][-.\s]?)?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})/,
      "Number is invalid"
    )
    .required("Field number is required"),
});

// Adding new contact function
export default function ContactForm() {
  const dispatch = useDispatch();

  const formId = useId();

  const handleFormSubmit = (values, actions) => {
    dispatch(addContact(values));

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", phone: "" }}
      validationSchema={addSchema}
      onSubmit={handleFormSubmit}
    >
      <Form className={css.wrapper}>
        <label className={css.label} htmlFor={formId + "-name"}>
          Name
        </label>
        <Field
          className={css.input}
          type="text"
          name="name"
          id={formId + "-name"}
        />
        <span className={css.err}>
          <ErrorMessage className={css.error} name="name" />
        </span>

        <label className={css.label} htmlFor={formId + "-phone"}>
          Number
        </label>
        <Field
          className={css.input}
          type="tel"
          name="phone"
          id={formId + "-phone"}
        />
        <span className={css.err}>
          <ErrorMessage className={css.error} name="phone" />
        </span>

        <button className={css.btn_submit} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
